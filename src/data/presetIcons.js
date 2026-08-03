import { Gauge, Target, Triangle, Flame, Trophy, FlaskConical } from 'lucide-react';

/**
 * PRESET_ICONS CONFIG MAP
 * Keyed by preset ID ('speedy', 'steady', 'balanced', 'grind', 'gauntlet', 'custom').
 * Edit icon assignments here to update preset icon visuals app-wide.
 */
export const PRESET_ICONS = {
  speedy: Gauge,
  steady: Target,
  balanced: Triangle,
  grind: Flame,
  gauntlet: Trophy,
  custom: FlaskConical
};
