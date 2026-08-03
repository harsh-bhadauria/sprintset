import React, { useState } from 'react';
import { X, Settings, Trash2, Save, RefreshCw } from 'lucide-react';
import { DEFAULT_SETTINGS } from '../utils/storage';

export default function SettingsModal({ settings, onSaveSettings, onResetAllData, onClose }) {
  const [ptsEasy, setPtsEasy] = useState(settings.pointsByDifficulty?.Easy || 10);
  const [ptsMedium, setPtsMedium] = useState(settings.pointsByDifficulty?.Medium || 20);
  const [ptsHard, setPtsHard] = useState(settings.pointsByDifficulty?.Hard || 30);

  const handleSave = (e) => {
    e.preventDefault();
    onSaveSettings({
      ...settings,
      pointsByDifficulty: {
        Easy: parseInt(ptsEasy, 10) || 10,
        Medium: parseInt(ptsMedium, 10) || 20,
        Hard: parseInt(ptsHard, 10) || 30
      }
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-align-gap">
            <Settings size={20} className="text-amber" />
            <h3 className="modal-title">Settings & Customization</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave} className="settings-body">
          <section className="settings-section">
            <h4 className="section-heading">Points Awarded per Solved Question</h4>
            <div className="pts-grid">
              <div className="pts-input-group">
                <label className="badge badge-easy">Easy</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={ptsEasy}
                  onChange={(e) => setPtsEasy(e.target.value)}
                  className="input-num"
                />
                <span className="pts-suffix">pts</span>
              </div>

              <div className="pts-input-group">
                <label className="badge badge-medium">Medium</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={ptsMedium}
                  onChange={(e) => setPtsMedium(e.target.value)}
                  className="input-num"
                />
                <span className="pts-suffix">pts</span>
              </div>

              <div className="pts-input-group">
                <label className="badge badge-hard">Hard</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={ptsHard}
                  onChange={(e) => setPtsHard(e.target.value)}
                  className="input-num"
                />
                <span className="pts-suffix">pts</span>
              </div>
            </div>
          </section>

          <section className="settings-section border-top">
            <h4 className="section-heading text-danger">Danger Zone</h4>
            <p className="text-muted text-xs">
              Clear all saved sessions, question history, and local progress stored in this browser.
            </p>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => {
                if (window.confirm('Wipe all local session progress and question states? This cannot be undone unless you exported JSON backup.')) {
                  onResetAllData();
                  onClose();
                }
              }}
            >
              <Trash2 size={16} />
              <span>Reset All Application Data</span>
            </button>
          </section>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save size={16} />
              <span>Save Settings</span>
            </button>
          </div>
        </form>

        <style>{`
          .modal-card {
            max-width: 480px;
            width: 100%;
            padding: 2rem;
          }

          .flex-align-gap {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .settings-body {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 1rem;
          }

          .settings-section {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .border-top {
            border-top: 1px solid var(--border-subtle);
            padding-top: 1.25rem;
          }

          .section-heading {
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 700;
          }

          .pts-grid {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .pts-input-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            background: var(--bg-input);
            padding: 0.5rem 0.75rem;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-subtle);
          }

          .input-num {
            width: 70px;
            background: transparent;
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-sm);
            padding: 0.3rem 0.5rem;
            color: var(--text-primary);
            font-family: var(--font-mono);
            font-weight: 700;
            font-size: 0.95rem;
            text-align: right;
          }

          .pts-suffix {
            font-size: 0.8rem;
            color: var(--text-muted);
            width: 30px;
          }
        `}</style>
      </div>
    </div>
  );
}
