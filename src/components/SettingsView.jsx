import React, { useState, useEffect } from 'react';
import { Settings, Download, Upload, Trash2, Save, FileText, Database, RotateCcw, AlertCircle, PawPrint, Eye, EyeOff, Lock, RefreshCw, Check } from 'lucide-react';
import { exportStateJSON, importStateJSON } from '../utils/storage';
import { exportToCSV, parseCSV } from '../utils/csvHandler';
import { generateRandomSyncKey } from '../utils/cloudSync';

export default function SettingsView({ 
  settings: propSettings, 
  questions = [],
  sessions = [],
  state: fullState,
  onSaveSettings, 
  onImportJSON, 
  onImportCSV, 
  onResetData,
  onForceUpload,
  onStateImported,
  onResetAllData,
  onUpdateQuestions
}) {
  const settings = propSettings || fullState?.settings || {};
  const currentQuestions = questions.length > 0 ? questions : (fullState?.questions || []);
  const currentSessions = sessions.length > 0 ? sessions : (fullState?.sessions || []);

  // Saved baseline values
  const savedPtsEasy = settings.pointsByDifficulty?.Easy || 200;
  const savedPtsMedium = settings.pointsByDifficulty?.Medium || 500;
  const savedPtsHard = settings.pointsByDifficulty?.Hard || 1000;

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
  const [showSettingsSyncKey, setShowSettingsSyncKey] = useState(false);
  const [localSyncKey, setLocalSyncKey] = useState(settings.syncKey || '');

  // Auto-update local state when props (e.g. from cloud sync) change
  useEffect(() => {
    setPtsEasy(savedPtsEasy);
    setPtsMedium(savedPtsMedium);
    setPtsHard(savedPtsHard);
    setWeightEasy(savedWeightEasy);
    setWeightMedium(savedWeightMedium);
    setWeightHard(savedWeightHard);
    setLocalSyncKey(settings.syncKey || '');
  }, [savedPtsEasy, savedPtsMedium, savedPtsHard, savedWeightEasy, savedWeightMedium, savedWeightHard, settings.syncKey]);

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
          Easy: parseInt(ptsEasy, 10) || 200,
          Medium: parseInt(ptsMedium, 10) || 500,
          Hard: parseInt(ptsHard, 10) || 1000
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

  const PALETTES = [
    { id: 'sunset',        name: 'Sunset Ember',  primary: '#f97316', secondary: '#ea580c' },
    { id: 'emerald',       name: 'Cyber Emerald', primary: '#10b981', secondary: '#059669' },
    { id: 'violet',        name: 'Cosmic Purple', primary: '#8b5cf6', secondary: '#7c3aed' },
    { id: 'electric-blue', name: 'Electric Blue', primary: '#0ea5e9', secondary: '#0284c7' },
    { id: 'rose',          name: 'Neon Rose',     primary: '#f43f5e', secondary: '#e11d48' }
  ];
  const activePalette = settings.palette || 'sunset';
  const activePaletteData = PALETTES.find(p => p.id === activePalette) || PALETTES[0];

  return (
    <div className="settings-container glass-card">
      <div className="settings-header">
        <div>
          <h2 className="settings-title">
            <Settings size={22} className="text-amber" />
            <span>App Settings</span>
          </h2>
          <p className="settings-subtitle">Customize scoring points, sprint time weights, accent theme palettes, and data backups.</p>
        </div>

        <div className="settings-header-actions">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => {
              if (window.confirm('Reset scoring points, sprint weights, and theme palette back to defaults?')) {
                if (onSaveSettings) {
                  onSaveSettings({
                    palette: 'sunset',
                    pointsByDifficulty: { Easy: 10, Medium: 20, Hard: 30 },
                    timeWeightsByDifficulty: { Easy: 4, Medium: 8, Hard: 15 }
                  });
                }
                setPtsEasy(10);
                setPtsMedium(20);
                setPtsHard(30);
                setWeightEasy(4);
                setWeightMedium(8);
                setWeightHard(15);
                setToastMsg('Reset settings to defaults!');
                setTimeout(() => setToastMsg(''), 2500);
              }
            }}
          >
            <RotateCcw size={15} />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Unsaved Changes Banner */}
      {hasUnsavedChanges && (
        <div className="unsaved-banner">
          <div className="unsaved-banner-content">
            <AlertCircle size={18} className="text-amber" />
            <span>You have unsaved changes to scoring or sprint duration weights!</span>
          </div>

          <div className="unsaved-actions">
            <button className="btn btn-secondary btn-sm" onClick={handleDiscardChanges}>
              Discard
            </button>
            <button className="btn btn-primary btn-sm" onClick={handleSaveAll}>
              <Save size={14} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toast */}
      {toastMsg && (
        <div className="settings-float-toast">
          <span>✓</span>
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="settings-form">
        {/* Section 0: Accent Theme Palette */}
        <section className="settings-stacked-section">
          <div className="setting-single-line-row">
            <div className="setting-label-col">
              <h3 className="setting-heading">Accent Theme Palette</h3>
              <p className="setting-subtext">Select your preferred accent color scheme for Sprintset</p>
            </div>

            <div className="palette-dropdown-row">
              <span
                className="swatch-color-dot"
                style={{ background: `linear-gradient(135deg, ${activePaletteData.primary} 0%, ${activePaletteData.secondary} 100%)` }}
              />
              <select
                className="palette-select"
                value={activePalette}
                onChange={e => {
                  const chosen = PALETTES.find(p => p.id === e.target.value);
                  if (onSaveSettings && chosen) {
                    onSaveSettings({ ...settings, palette: chosen.id });
                    setToastMsg(`Switched to ${chosen.name}!`);
                    setTimeout(() => setToastMsg(''), 1800);
                  }
                }}
              >
                {PALETTES.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

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
            
            {onForceUpload && (
              <button className="btn btn-primary btn-sm ml-2" onClick={onForceUpload}>
                <RefreshCw size={14} />
                <span>Force Upload State</span>
              </button>
            )}
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

      {/* Cloud Sync Profile Section */}
      <section className="settings-stacked-section">
        <div className="setting-single-line-row">
          <div className="setting-label-col">
            <span className="text-sm font-bold text-sky-500 flex items-center gap-1 mb-1">
              <Lock size={14} className="text-sky-500" /> Private Cloud Sync Key
            </span>
            <p className="setting-subtext">Secret passphrase used to securely link your laptop and phone profile data</p>
          </div>

          <div className="sync-key-settings-input" style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-input)', 
                border: '1.5px solid var(--border-subtle)', 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden' 
              }}
            >
              <input
                type={showSettingsSyncKey ? 'text' : 'password'}
                value={localSyncKey}
                onChange={(e) => setLocalSyncKey(e.target.value.toUpperCase())}
                className="text-center font-mono font-bold uppercase"
                style={{ 
                  width: '150px', 
                  background: 'transparent', 
                  border: 'none', 
                  padding: '0.45rem', 
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
                placeholder="SHADOW-PAW-482"
              />
              <button
                type="button"
                onClick={() => setShowSettingsSyncKey(!showSettingsSyncKey)}
                title={showSettingsSyncKey ? 'Hide Key' : 'Reveal Key'}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '0 0.6rem 0 0.2rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {showSettingsSyncKey ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {localSyncKey !== (settings.syncKey || '') && (
              <button
                type="button"
                className="btn btn-primary p-2"
                style={{ marginLeft: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => {
                  onSaveSettings({ ...settings, syncKey: localSyncKey });
                  setToastMsg('Sync Key updated!');
                  setTimeout(() => setToastMsg(''), 1800);
                }}
                title="Save New Sync Key"
              >
                <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Standalone Veto Integration Section */}
      <section className="settings-stacked-section veto-section-card">
        <div className="setting-single-line-row">
          <div className="setting-label-col">
            <h3 className="setting-heading flex items-center gap-2"><PawPrint size={16} className="text-amber" /> Veto Integration</h3>
            <p className="setting-subtext">Earn screen time in Veto's Time Bank when you complete DSA sprints</p>
          </div>

          <div className="flex items-center gap-3">
            <label className="toggle-switch-label">
              <input
                type="checkbox"
                checked={Boolean(settings.vetoEnabled)}
                onChange={(e) => {
                  onSaveSettings({
                    ...settings,
                    vetoEnabled: e.target.checked
                  });
                }}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </section>

      {/* Section 4: Danger Zone */}
      <section className="settings-stacked-section danger-stacked mt-4">
        <div className="danger-zone-header" style={{ marginBottom: '1.25rem' }}>
          <h3 className="setting-heading font-bold" style={{ color: '#ef4444' }}>
            Danger Zone
          </h3>
          <p className="setting-subtext">Irreversible destructive actions for local storage and progress</p>
        </div>

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
        .settings-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .settings-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .settings-title {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .settings-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .settings-header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          padding-top: 0.2rem;
        }

        /* Unsaved Banner */
        .unsaved-banner {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          animation: fadeIn 0.2s ease;
        }

        .unsaved-banner-content {
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

        .settings-float-toast {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(15, 23, 42, 0.92);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: var(--easy-color);
          padding: 0.65rem 1.1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.85rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          z-index: 9999;
          animation: toastSlideIn 0.2s ease;
        }

        @keyframes toastSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
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

        /* Palette Dropdown */
        .palette-dropdown-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .palette-select {
          appearance: none;
          background: var(--bg-input);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.45rem 2rem 0.45rem 0.75rem;
          cursor: pointer;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.6rem center;
        }

        .palette-select:focus,
        .palette-select:hover {
          border-color: var(--amber-main);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
        }

        .palette-select option {
          background: #161b26;
          color: var(--text-primary);
        }

        .swatch-color-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
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

        /* Styled Toggle Switch */
        .toggle-switch-label {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          user-select: none;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .toggle-switch-label input[type="checkbox"] {
          display: none;
        }

        .toggle-slider {
          position: relative;
          width: 42px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .toggle-slider::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          background: var(--text-secondary);
          border-radius: 50%;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease;
        }

        .toggle-switch-label input[type="checkbox"]:checked + .toggle-slider {
          background: rgba(var(--accent-rgb), 0.25);
          border-color: rgba(var(--accent-rgb), 0.6);
        }

        .toggle-switch-label input[type="checkbox"]:checked + .toggle-slider::before {
          transform: translateX(18px);
          background: var(--amber-main);
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
