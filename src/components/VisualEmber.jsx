import React from 'react';
import { Flame, Sparkles, Moon } from 'lucide-react';

export default function VisualEmber({ solvedCount = 0, points = 0, isSprintActive = false }) {
  // Determine flame state from 0 to 3
  let stateLevel = 0;
  if (solvedCount >= 6 || points >= 100) {
    stateLevel = 3; // Radiant
  } else if (solvedCount >= 3 || points >= 50) {
    stateLevel = 2; // Steady
  } else if (solvedCount >= 1 || points >= 10) {
    stateLevel = 1; // Flickering
  }

  const getStageTitle = () => {
    switch (stateLevel) {
      case 3: return { name: 'Radiant Fire', desc: 'Peak Focus Achieved!' };
      case 2: return { name: 'Steady Flame', desc: 'In The Zone' };
      case 1: return { name: 'Warming Up', desc: 'Keep Building Momentum' };
      default: return { name: 'Dormant Ember', desc: 'Ready to Ignite' };
    }
  };

  const info = getStageTitle();

  return (
    <div className={`ember-container stage-${stateLevel}`}>
      <div className="ember-visual-wrapper">
        <div className="ember-glow-ring" />

        <svg viewBox="0 0 100 120" className="ember-svg">
          <defs>
            <radialGradient id="emberGradient0" cx="50%" cy="80%" r="60%">
              <stop offset="0%" stopColor="#4b5563" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1f2937" stopOpacity="0.3" />
            </radialGradient>

            <radialGradient id="emberGradient1" cx="50%" cy="70%" r="70%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ea580c" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.2" />
            </radialGradient>

            <radialGradient id="emberGradient2" cx="50%" cy="60%" r="80%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
              <stop offset="30%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#c2410c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#991b1b" stopOpacity="0.3" />
            </radialGradient>

            <radialGradient id="emberGradient3" cx="50%" cy="50%" r="90%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#fde047" stopOpacity="1" />
              <stop offset="55%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#ef4444" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          {/* Base Coal Bed */}
          <ellipse cx="50" cy="102" rx="35" ry="8" fill="#111827" />

          {/* Flame Paths */}
          {stateLevel === 0 && (
            <path
              d="M50 100 C35 100, 32 85, 42 75 C48 68, 45 60, 50 55 C55 60, 52 68, 58 75 C68 85, 65 100, 50 100 Z"
              fill="url(#emberGradient0)"
              className="ember-path-dormant"
            />
          )}

          {stateLevel >= 1 && (
            <path
              d="M50 100 C30 100, 25 80, 38 65 C45 56, 42 42, 50 35 C58 42, 55 56, 62 65 C75 80, 70 100, 50 100 Z"
              fill={`url(#emberGradient${stateLevel})`}
              className="ember-path-main"
            />
          )}

          {stateLevel >= 2 && (
            <path
              d="M50 96 C38 96, 35 80, 44 70 C48 64, 46 52, 50 45 C54 52, 52 64, 56 70 C65 80, 62 96, 50 96 Z"
              fill={`url(#emberGradient3)`}
              className="ember-path-core"
            />
          )}
        </svg>

        {stateLevel === 3 && (
          <div className="sparkles-overlay">
            <Sparkles className="sparkle-icon s1" size={14} />
            <Sparkles className="sparkle-icon s2" size={12} />
          </div>
        )}
      </div>

      <div className="ember-status-text">
        <span className="ember-title">{info.name}</span>
        <span className="ember-desc">{info.desc}</span>
      </div>

      <style>{`
        .ember-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          user-select: none;
        }

        .ember-visual-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ember-glow-ring {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          transition: all 0.5s ease;
        }

        .stage-0 .ember-glow-ring {
          background: rgba(75, 85, 99, 0.1);
          box-shadow: 0 0 15px rgba(75, 85, 99, 0.2);
        }

        .stage-1 .ember-glow-ring {
          background: rgba(var(--accent-rgb), 0.15);
          box-shadow: 0 0 30px rgba(var(--accent-rgb), 0.3);
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .stage-2 .ember-glow-ring {
          background: rgba(var(--accent-rgb), 0.25);
          box-shadow: 0 0 45px rgba(var(--accent-rgb), 0.5);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .stage-3 .ember-glow-ring {
          background: rgba(251, 191, 36, 0.35);
          box-shadow: 0 0 60px rgba(251, 191, 36, 0.7);
          animation: pulseGlow 1.2s infinite ease-in-out;
        }

        .ember-svg {
          width: 100%;
          height: 100%;
          z-index: 2;
          overflow: visible;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
        }

        .ember-path-dormant {
          opacity: 0.6;
        }

        .ember-path-main {
          animation: floatMascot 3.5s infinite ease-in-out;
          transform-origin: center bottom;
        }

        .ember-path-core {
          animation: floatMascot 2.5s infinite ease-in-out reverse;
          transform-origin: center bottom;
        }

        .sparkles-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 3;
        }

        .sparkle-icon {
          position: absolute;
          color: var(--gold-accent);
          animation: sparkleAnim 2s infinite ease-in-out;
        }

        .s1 { top: 10%; right: 15%; animation-delay: 0.2s; }
        .s2 { bottom: 25%; left: 10%; animation-delay: 0.8s; }

        @keyframes sparkleAnim {
          0%, 100% { opacity: 0.2; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }

        .ember-status-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ember-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .stage-3 .ember-title { color: var(--gold-accent); }
        .stage-2 .ember-title { color: var(--amber-main); }

        .ember-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
