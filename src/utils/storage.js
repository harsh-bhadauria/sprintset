import { DEFAULT_QUESTIONS } from '../data/starterQuestions.js';

const STORAGE_KEY = 'sprintset_app_data_v1';
const ACTIVE_SPRINT_KEY = 'sprintset_active_sprint_v1';

export const DEFAULT_SETTINGS = {
  pointsByDifficulty: {
    Easy: 200,
    Medium: 500,
    Hard: 1000
  },
  timeWeightsByDifficulty: {
    Easy: 4,
    Medium: 8,
    Hard: 15
  }
};

const DEFAULT_STATE = {
  questions: DEFAULT_QUESTIONS,
  questionStates: {},
  sessions: [],
  settings: DEFAULT_SETTINGS
};

export function loadAppState() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_STATE;
    const parsed = JSON.parse(data);
    return {
      questions: parsed.questions || DEFAULT_QUESTIONS,
      questionStates: parsed.questionStates || {},
      sessions: parsed.sessions || [],
      settings: {
        ...DEFAULT_SETTINGS,
        ...(parsed.settings || {}),
        timeWeightsByDifficulty: {
          ...DEFAULT_SETTINGS.timeWeightsByDifficulty,
          ...((parsed.settings && parsed.settings.timeWeightsByDifficulty) || {})
        }
      }
    };
  } catch (err) {
    console.error('Error loading AppState from localStorage:', err);
    return DEFAULT_STATE;
  }
}

export function saveAppState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Error saving AppState to localStorage:', err);
  }
}

export function saveActiveSprintState(state) {
  try {
    if (!state) {
      localStorage.removeItem(ACTIVE_SPRINT_KEY);
    } else {
      localStorage.setItem(ACTIVE_SPRINT_KEY, JSON.stringify(state));
    }
  } catch (err) {
    console.error('Error saving active sprint state:', err);
  }
}

export function loadActiveSprintState() {
  try {
    const raw = localStorage.getItem(ACTIVE_SPRINT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Error loading active sprint state:', err);
    return null;
  }
}

export function exportStateJSON(state) {
  const jsonStr = JSON.stringify(state, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `sprintset_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function importStateJSON(file, onSuccess, onError) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      onSuccess(parsed);
    } catch (err) {
      onError('Invalid JSON file format.');
    }
  };
  reader.onerror = () => onError('Failed to read file.');
  reader.readAsText(file);
}
