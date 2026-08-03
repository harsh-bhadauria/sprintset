import React from 'react';
import { ShieldAlert, ShieldCheck, Award, X } from 'lucide-react';

export default function ConfidenceSelector({ onSelect, onCancel }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">How confident were you?</h3>
          <button className="close-btn" onClick={onCancel}><X size={18} /></button>
        </div>

        <p className="modal-subtitle">
          Your rating determines how often this question will resurface in future sprints.
        </p>

        <div className="confidence-options">
          <button
            className="confidence-btn shaky"
            onClick={() => onSelect('shaky')}
          >
            <div className="conf-icon-box">
              <ShieldAlert size={22} />
            </div>
            <div className="conf-text">
              <span className="conf-label">Shaky</span>
              <span className="conf-desc">Needed hints, took long, or felt uncertain. Surfaces frequently.</span>
            </div>
          </button>

          <button
            className="confidence-btn ok"
            onClick={() => onSelect('ok')}
          >
            <div className="conf-icon-box">
              <ShieldCheck size={22} />
            </div>
            <div className="conf-text">
              <span className="conf-label">OK</span>
              <span className="conf-desc">Solved with reasonable effort and clear logic. Standard resurfacing.</span>
            </div>
          </button>

          <button
            className="confidence-btn solid"
            onClick={() => onSelect('solid')}
          >
            <div className="conf-icon-box">
              <Award size={22} />
            </div>
            <div className="conf-text">
              <span className="conf-label">Solid</span>
              <span className="conf-desc">Mastered! Clean, optimal code with zero doubts. Surfaces rarely.</span>
            </div>
          </button>
        </div>

        <style>{`
          .modal-card {
            max-width: 480px;
            width: 100%;
            padding: 1.75rem;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .modal-title {
            font-family: var(--font-heading);
            font-size: 1.35rem;
            font-weight: 800;
            color: var(--text-primary);
          }

          .close-btn {
            background: transparent;
            color: var(--text-muted);
            border-radius: var(--radius-full);
            padding: 0.25rem;
          }

          .close-btn:hover {
            color: var(--text-primary);
            background: var(--bg-input);
          }

          .modal-subtitle {
            font-size: 0.85rem;
            color: var(--text-muted);
            line-height: 1.4;
          }

          .confidence-options {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .confidence-btn {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-radius: var(--radius-md);
            background: var(--bg-input);
            border: 1px solid var(--border-subtle);
            text-align: left;
            transition: all var(--transition-fast);
          }

          .confidence-btn:hover {
            transform: translateX(4px);
          }

          .shaky:hover {
            border-color: #f59e0b;
            background: rgba(245, 158, 11, 0.1);
          }
          .shaky .conf-icon-box { color: #f59e0b; background: rgba(245, 158, 11, 0.15); }

          .ok:hover {
            border-color: #3b82f6;
            background: rgba(59, 130, 246, 0.1);
          }
          .ok .conf-icon-box { color: #3b82f6; background: rgba(59, 130, 246, 0.15); }

          .solid:hover {
            border-color: #10b981;
            background: rgba(16, 185, 129, 0.1);
          }
          .solid .conf-icon-box { color: #10b981; background: rgba(16, 185, 129, 0.15); }

          .conf-icon-box {
            width: 42px;
            height: 42px;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .conf-text {
            display: flex;
            flex-direction: column;
          }

          .conf-label {
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 1.05rem;
            color: var(--text-primary);
          }

          .conf-desc {
            font-size: 0.78rem;
            color: var(--text-muted);
          }
        `}</style>
      </div>
    </div>
  );
}
