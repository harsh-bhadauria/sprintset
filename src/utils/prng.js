/**
 * Mulberry32 seeded random number generator.
 * Returns a function that produces deterministic floating point pseudo-random numbers in [0, 1)
 */
export function createPRNG(seed) {
  let s = seed >>> 0;
  return function random() {
    let t = (s += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generate a random numeric seed for session recreation
 */
export function generateSeed() {
  return Math.floor(Math.random() * 1000000) + 1;
}
