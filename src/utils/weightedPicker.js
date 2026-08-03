import { createPRNG } from './prng.js';

export const BASE_WEIGHTS = {
  never: 10,
  gave_up: 8,
  shaky: 5,
  ok: 2,
  solid: 0.5
};

/**
 * Calculate resurfacing weight for a question given user's state history
 */
export function calculateQuestionWeight(questionId, questionStates) {
  const state = questionStates[questionId];
  if (!state || (!state.status && !state.confidence)) {
    return BASE_WEIGHTS.never;
  }

  if (state.status === 'gave_up') {
    return BASE_WEIGHTS.gave_up;
  }

  if (state.confidence === 'shaky') {
    return BASE_WEIGHTS.shaky;
  }

  if (state.confidence === 'ok') {
    return BASE_WEIGHTS.ok;
  }

  if (state.confidence === 'solid') {
    return BASE_WEIGHTS.solid;
  }

  return BASE_WEIGHTS.never;
}

/**
 * Build a fixed-quota question queue that is difficulty-gradual by default:
 * Easy questions first, then Medium, then Hard (shuffled tier by tier).
 * quota = { Easy: eCount, Medium: mCount, Hard: hCount }
 */
export function buildQuotaQuestionQueue(questions, quota, questionStates, seed) {
  const rng = createPRNG(seed);
  const selectedQueue = [];
  const usedIds = new Set();

  const difficulties = ['Easy', 'Medium', 'Hard'];

  difficulties.forEach(diff => {
    const targetCount = quota[diff] || 0;
    if (targetCount <= 0) return;

    // Filter questions matching difficulty
    const diffPool = questions.filter(q => q.difficulty === diff && !usedIds.has(q.id));
    
    // Pick targetCount questions weighted by confidence history
    const picked = pickWeightedSubset(diffPool, targetCount, questionStates, rng);
    
    // Shuffle tier internally so tier is randomly selected
    const shuffledTier = shuffleArray(picked, rng);
    shuffledTier.forEach(q => {
      usedIds.add(q.id);
      selectedQueue.push(q);
    });
  });

  return selectedQueue;
}

/**
 * Pick a replacement question of the same difficulty for the "Too Easy" action
 */
export function getReplacementQuestion(difficulty, allQuestions, currentQueueIds, questionStates, seed) {
  const rng = createPRNG(seed + Date.now());
  const pool = allQuestions.filter(q => q.difficulty === difficulty && !currentQueueIds.has(q.id));
  
  if (pool.length === 0) {
    const fallback = allQuestions.filter(q => q.difficulty === difficulty);
    if (fallback.length === 0) return null;
    return fallback[Math.floor(rng() * fallback.length)];
  }

  const picked = pickWeightedSubset(pool, 1, questionStates, rng);
  return picked[0] || pool[0];
}

function pickWeightedSubset(pool, count, questionStates, rng) {
  if (!pool || pool.length === 0) return [];
  const remaining = pool.map(q => ({
    ...q,
    weight: calculateQuestionWeight(q.id, questionStates)
  }));

  const result = [];
  const needed = Math.min(count, remaining.length);

  for (let step = 0; step < needed; step++) {
    const totalWeight = remaining.reduce((sum, item) => sum + item.weight, 0);
    let randomVal = rng() * totalWeight;

    let selectedIndex = 0;
    for (let i = 0; i < remaining.length; i++) {
      randomVal -= remaining[i].weight;
      if (randomVal <= 0) {
        selectedIndex = i;
        break;
      }
    }

    result.push(remaining[selectedIndex]);
    remaining.splice(selectedIndex, 1);
  }

  return result;
}

function shuffleArray(arr, rng) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
