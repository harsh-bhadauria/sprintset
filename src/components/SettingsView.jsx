import React, { useState } from 'react';
import { Settings, Download, Upload, Trash2, Save, FileText, Database, RotateCcw, AlertCircle } from 'lucide-react';
import { exportStateJSON, importStateJSON } from '../utils/storage';
import { exportToCSV, parseCSV } from '../utils/csvHandler';

export default function SettingsView({ 
  settings: propSettings, 
  questions = [],
  sessions = [],
  state: fullState,
  onSaveSettings, 
  onImportJSON, 
  onImportCSV, 
  onResetData,
  onStateImported,
  onResetAllData,
  onUpdateQuestions
}) {
  const settings = propSettings || fullState?.settings || {};
  const currentQuestions = questions.length > 0 ? questions : (fullState?.questions || []);
  const currentSessions = sessions.length > 0 ? sessions : (fullState?.sessions || []);

  // Saved baseline values
  const savedPtsEasy = settings.pointsByDifficulty?.Easy || 10;
  const savedPtsMedium = settings.pointsByDifficulty?.Medium || 20;
  const savedPtsHard = settings.pointsByDifficulty?.Hard || 30;

  const savedWeightEasy = settings.timeWeightsByDifficulty?.Easy || 4;
  const savedWeightMedium = settings.timeWeightsByDifficulty?.Medium || 8;
  const savedWeightHard = settings.timeWeightsByDifficulty?.Hard || 15;

  // Local form state
  const [ptsEasy, setPtsEasy] = useState(savedPtsEasy);
  const [ptsMedium, setPtsMedium] = useState(savedPtsMedium);
  const [ptsHard, setPtsHard] = useState(savedPtsHard);

  const [weightEasy, setWeightEasy] = useState(savedWeightEasy);
  const [weightMedium, setWeightMedium] = useState(savedWeightMedium);
  const [weightHard, setWeightHard] = useState(savedWeightHard);

  const [toastMsg, setToastMsg] = useState('');

  // Check if current form inputs differ from saved settings baseline
  const hasUnsavedChanges = 
    parseInt(ptsEasy, 10) !== savedPtsEasy ||
    parseInt(ptsMedium, 10) !== savedPtsMedium ||
    parseInt(ptsHard, 10) !== savedPtsHard ||
    parseInt(weightEasy, 10) !== savedWeightEasy ||
    parseInt(weightMedium, 10) !== savedWeightMedium ||
    parseInt(weightHard, 10) !== savedWeightHard;

  const handleSaveAll = (e) => {
    if (e) e.preventDefault();
    if (onSaveSettings) {
      onSaveSettings({
        ...settings,
        pointsByDifficulty: {
          Easy: parseInt(ptsEasy, 10) || 10,
          Medium: parseInt(ptsMedium, 10) || 20,
          Hard: parseInt(ptsHard, 10) || 30
        },
        timeWeightsByDifficulty: {
          Easy: parseInt(weightEasy, 10) || 4,
          Medium: parseInt(weightMedium, 10) || 8,
          Hard: parseInt(weightHard, 10) || 15
        }
      });
    }
    setToastMsg('Settings saved!');
    setTimeout(() => setToastMsg(''), 2500);
  };

  const handleDiscardChanges = () => {
    setPtsEasy(savedPtsEasy);
    setPtsMedium(savedPtsMedium);
    setPtsHard(savedPtsHard);
    setWeightEasy(savedWeightEasy);
    setWeightMedium(savedWeightMedium);
    setWeightHard(savedWeightHard);
  };

  const handleFileImportJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    importStateJSON(
      file,
      (importedData) => {
        if (onImportJSON) onImportJSON(importedData);
        else if (onStateImported) onStateImported(importedData);
        alert('Data backup successfully imported!');
      },
      (err) => alert(err)
    );
  };

  const handleFileImportCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    parseCSV(file, (imported) => {
      if (imported.length === 0) {
        alert('No valid question rows found in CSV.');
        return;
      }
      if (onImportCSV) onImportCSV(imported);
      else if (onUpdateQuestions) onUpdateQuestions(imported);
      alert(`Successfully loaded ${imported.length} questions from CSV!`);
    });
  };

  const handleExportJSON = () => {
    const snapshot = fullState || {
      questions: currentQuestions,
      sessions: currentSessions,
      settings
    };
    exportStateJSON(snapshot);
  };

  const handleReset = () => {
    if (onResetData) onResetData();
    else if (onResetAllData) onResetAllData();
  };

  return (
    <div className="settings-stacked-container glass-card">
      {/* Header */}
      <div className="settings-header-stacked">
        <div className="header-title-flex">
          <Settings size={22} className="text-amber" />
          <h2 className="page-title">Settings</h2>
        </div>
        <p className="page-subtitle">Configure scoring points, duration suggestion weights, and data backups.</p>
      </div>

      {/* Unsaved Changes Banner */}
      {hasUnsavedChanges && (
        <div className="unsaved-banner-top flex-between">
          <div className="unsaved-left">
            <AlertCircle size={18} className="text-amber" />
            <span>You have unsaved changes</span>
          </div>
          <div className="unsaved-actions">
            <button className="btn btn-secondary btn-sm" onClick={handleDiscardChanges}>
              <RotateCcw size={14} />
              <span>Discard</span>
            </button>
            <button className="btn btn-primary btn-sm" onClick={handleSaveAll}>
              <Save size={14} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      )}

      {toastMsg && <div className="save-toast-banner">{toastMsg}</div>}

      <div className="settings-form">
        {/* Section 1: Scoring Configuration */}
        <section className="settings-stacked-section">
          <div className="setting-single-line-row">
            <div className="setting-label-col">
              <h3 className="setting-heading">Scoring Configuration</h3>
              <p className="setting-subtext">Points awarded when a problem is marked Solved</p>
            </div>

            <div className="setting-controls-right">
              <div className="pts-box">
                <span className="badge badge-easy">Easy</span>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={ptsEasy}
                  onChange={(e) => setPtsEasy(e.target.value)}
                  className="input-num-tight"
                />
                <span className="unit-text">pts</span>
              </div>

              <div className="pts-box">
                <span className="badge badge-medium">Medium</span>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={ptsMedium}
                  onChange={(e) => setPtsMedium(e.target.value)}
                  className="input-num-tight"
                />
                <span className="unit-text">pts</span>
              </div>

              <div className="pts-box">
                <span className="badge badge-hard">Hard</span>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={ptsHard}
                  onChange={(e) => setPtsHard(e.target.value)}
                  className="input-num-tight"
                />
                <span className="unit-text">pts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Duration Suggestion Weights */}
        <section className="settings-stacked-section">
          <div className="setting-single-line-row">
            <div className="setting-label-col">
              <h3 className="setting-heading">Duration Suggestion Weights</h3>
              <p className="setting-subtext">Base minutes per question used to calculate suggested sprint time</p>
            </div>

            <div className="setting-controls-right">
              <div className="pts-box">
                <span className="badge badge-easy">Easy</span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={weightEasy}
                  onChange={(e) => setWeightEasy(e.target.value)}
                  className="input-num-tight"
                />
                <span className="unit-text">m/q</span>
              </div>

              <div className="pts-box">
                <span className="badge badge-medium">Medium</span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={weightMedium}
                  onChange={(e) => setWeightMedium(e.target.value)}
                  className="input-num-tight"
                />
                <span className="unit-text">m/q</span>
              </div>

              <div className="pts-box">
                <span className="badge badge-hard">Hard</span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={weightHard}
                  onChange={(e) => setWeightHard(e.target.value)}
                  className="input-num-tight"
                />
                <span className="unit-text">m/q</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 3: Data Backup & CSV */}
      <section className="settings-stacked-section">
        <div className="setting-single-line-row">
          <div className="setting-label-col">
            <h3 className="setting-heading">Data & Progress Snapshot</h3>
            <p className="setting-subtext">Export JSON backup or load saved progress snapshot</p>
          </div>
          <div className="button-group-side">
            <button className="btn btn-secondary btn-sm" onClick={handleExportJSON}>
              <Upload size={14} />
              <span>Export JSON</span>
            </button>

            <label className="btn btn-secondary btn-sm cursor-pointer">
              <Download size={14} />
              <span>Import JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileImportJSON}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        <div className="setting-single-line-row mt-3">
          <div className="setting-label-col">
            <h3 className="setting-heading">CSV Question Bank</h3>
            <p className="setting-subtext">Export or import custom spreadsheet question bank</p>
          </div>
          <div className="button-group-side">
            <button className="btn btn-secondary btn-sm" onClick={() => exportToCSV(currentQuestions)}>
              <FileText size={14} />
              <span>Export CSV</span>
            </button>

            <label className="btn btn-secondary btn-sm cursor-pointer">
              <Database size={14} />
              <span>Import CSV</span>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileImportCSV}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
      </section>

      {/* Section 4: Danger Zone */}
      <section className="settings-stacked-section danger-stacked">
        <div className="setting-single-line-row danger-row-bg">
          <div className="setting-label-col">
            <h3 className="setting-heading text-danger">Reset All Local Data</h3>
            <p className="setting-subtext">Irreversibly wipe saved sessions and local question states</p>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={handleReset}
          >
            <Trash2 size={14} />
            <span>Reset All Data</span>
          </button>
        </div>
      </section>

      <style>{`
        .settings-stacked-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .settings-header-stacked {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .header-title-flex {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .page-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
        }

        .page-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        /* Unsaved Banner Top */
        .unsaved-banner-top {
          background: rgba(249, 115, 22, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.35);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: fadeIn 0.2s ease;
        }

        .unsaved-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .unsaved-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .save-toast-banner {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--easy-color);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .settings-stacked-section {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .setting-single-line-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .danger-row-bg {
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.2);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
        }

        .setting-label-col {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .setting-heading {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .setting-subtext {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .setting-controls-right {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .pts-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-md);
        }

        .input-num-tight {
          width: 50px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.35rem;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.88rem;
          text-align: right;
          outline: none;
        }

        .input-num-tight:focus {
          border-color: var(--amber-main);
        }

        .unit-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .button-group-side {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .danger-stacked {
          border-bottom: none;
          padding-bottom: 0;
        }

        .btn-sm {
          padding: 0.45rem 0.85rem;
          font-size: 0.8rem;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .mt-3 { margin-top: 0.75rem; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .setting-single-line-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
          .setting-controls-right {
            width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
