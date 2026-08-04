import React, { useState, useMemo, useEffect } from 'react';
import { Clock, Filter, Play, CheckSquare, Square, Layers, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { generateSeed } from '../utils/prng';
import { PRESET_ICONS } from '../data/presetIcons';
import { formatTopicName } from './SessionSummary';

export const PRESETS = [
  { id: 'speedy', name: 'Speedy', tag: '5 Easy', quota: { Easy: 5, Medium: 0, Hard: 0 } },
  { id: 'steady', name: 'Steady', tag: '5 Medium', quota: { Easy: 0, Medium: 5, Hard: 0 } },
  { id: 'balanced', name: 'Balanced', tag: '2E / 2M / 1H', quota: { Easy: 2, Medium: 2, Hard: 1 } },
  { id: 'grind', name: 'Grind', tag: '1E / 2M / 2H', quota: { Easy: 1, Medium: 2, Hard: 2 } },
  { id: 'gauntlet', name: 'Gauntlet', tag: '2M / 3H', quota: { Easy: 0, Medium: 2, Hard: 3 } },
  { id: 'custom', name: 'Custom', tag: '? / ? / ?', quota: null }
];

export default function StartSprintModal({ questions, settings = {}, onStartSprint }) {
  const timeWeights = settings.timeWeightsByDifficulty || { Easy: 4, Medium: 8, Hard: 15 };

  const [selectedPreset, setSelectedPreset] = useState('balanced');
  const [customQuota, setCustomQuota] = useState({ Easy: 2, Medium: 2, Hard: 1 });
  const [isTopicsExpanded, setIsTopicsExpanded] = useState(false);

  const activeQuota = useMemo(() => {
    if (selectedPreset === 'custom') return customQuota;
    const p = PRESETS.find(p => p.id === selectedPreset);
    return p ? p.quota : { Easy: 2, Medium: 2, Hard: 1 };
  }, [selectedPreset, customQuota]);

  const totalQuestionsQuota = (activeQuota.Easy || 0) + (activeQuota.Medium || 0) + (activeQuota.Hard || 0);

  const suggestedMinutes = useMemo(() => {
    const e = activeQuota.Easy || 0;
    const m = activeQuota.Medium || 0;
    const h = activeQuota.Hard || 0;
    const exactCalc = (e * (timeWeights.Easy || 4)) + (m * (timeWeights.Medium || 8)) + (h * (timeWeights.Hard || 15));
    const rounded = Math.round(exactCalc / 5) * 5;
    return Math.max(5, rounded || 10);
  }, [activeQuota, timeWeights]);

  const [durationMinutes, setDurationMinutes] = useState(35);
  const [userEditedDuration, setUserEditedDuration] = useState(false);

  useEffect(() => {
    if (!userEditedDuration) {
      setDurationMinutes(suggestedMinutes);
    }
  }, [suggestedMinutes, userEditedDuration]);

  const allTopics = useMemo(() => {
    const set = new Set(questions.map(q => q.topic || 'General'));
    return Array.from(set).sort();
  }, [questions]);

  const [selectedTopics, setSelectedTopics] = useState(allTopics);

  const availablePoolCount = useMemo(() => {
    return questions.filter(q => selectedTopics.length === 0 || selectedTopics.includes(q.topic || 'General')).length;
  }, [questions, selectedTopics]);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const selectAllTopics = () => setSelectedTopics([...allTopics]);
  const clearAllTopics = () => setSelectedTopics([]);

  const handleStart = () => {
    if (totalQuestionsQuota <= 0) {
      alert('Please select at least 1 question for your sprint.');
      return;
    }

    if (availablePoolCount === 0) {
      alert('No questions match your selected topic filters. Please expand your topic selection.');
      return;
    }

    const matchingQuestions = questions.filter(q => {
      return selectedTopics.length === 0 || selectedTopics.includes(q.topic || 'General');
    });

    const seed = generateSeed();

    onStartSprint({
      durationSec: durationMinutes * 60,
      seed,
      quota: activeQuota,
      totalQuestionsQuota,
      filters: {
        topics: selectedTopics,
        presetId: selectedPreset
      },
      matchingQuestions
    });
  };

  // Clock Hand Angles
  const clockMinuteAngle = (durationMinutes % 60) * 6;
  const clockHourAngle = ((durationMinutes / 60) % 12) * 30;

  // Generate 12 ticks around 180px dial
  const clockTicks = useMemo(() => {
    const ticks = [];
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      const isMajor = i % 3 === 0;
      const r1 = 44;
      const r2 = isMajor ? 38 : 41;
      const x1 = 50 + r1 * Math.cos(rad);
      const y1 = 50 + r1 * Math.sin(rad);
      const x2 = 50 + r2 * Math.cos(rad);
      const y2 = 50 + r2 * Math.sin(rad);
      ticks.push({ key: i, x1, y1, x2, y2, isMajor });
    }
    return ticks;
  }, []);

  return (
    <div className="sprint-setup-container glass-card">
      {/* Header */}
      <div className="setup-header">
        <div className="setup-title-group">
          <div className="setup-badge">
            <Zap size={22} className="text-amber" />
          </div>
          <div>
            <h2 className="setup-title">Start a DSA Sprint</h2>
            <p className="setup-subtitle">Select a difficulty preset, adjust duration, and launch.</p>
          </div>
        </div>
      </div>

      {/* Row 1: Two-Column Equal Height Layout */}
      <div className="setup-two-col-grid">
        {/* Left Column: Preset Square Cards Grid (6 cards) */}
        <div className="col-left">
          <label className="section-label mb-3">
            <Layers size={16} />
            <span>Sprint Distribution ({totalQuestionsQuota} questions)</span>
          </label>

          <div className="square-presets-grid">
            {PRESETS.map(preset => {
              const isSelected = selectedPreset === preset.id;
              const IconComp = PRESET_ICONS[preset.id] || Zap;
              return (
                <button
                  key={preset.id}
                  type="button"
                  className={`square-preset-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedPreset(preset.id)}
                >
                  <div className="preset-icon-container">
                    <IconComp size={30} className={`preset-icon-theme ${isSelected ? 'icon-selected' : 'icon-unselected'}`} />
                  </div>
                  <span className="preset-name">{preset.name}</span>
                  <span className="preset-compact-tag">{preset.tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Duration Control matching left height */}
        <div className="col-right">
          <div className="section-header-flex mb-3">
            <label className="section-label">
              <Clock size={16} />
              <span>Sprint Duration</span>
            </label>
            <span className="suggested-tag-pill">
              Suggested: {suggestedMinutes} min
            </span>
          </div>

          <div className="duration-expanded-panel glass-card">
            <div className="expanded-clock-body">
              {/* 180px SVG Clock Face with Ticks & Subtle Numerals */}
              <div className="clock-graphic-large">
                <svg viewBox="0 0 100 100" className="clock-svg">
                  <circle cx="50" cy="50" r="45" className="clock-face" />
                  
                  {clockTicks.map(t => (
                    <line
                      key={t.key}
                      x1={t.x1}
                      y1={t.y1}
                      x2={t.x2}
                      y2={t.y2}
                      className={t.isMajor ? 'clock-tick-major' : 'clock-tick-minor'}
                    />
                  ))}

                  {/* Subtle Numerals matching minor ticks size & weight */}
                  <text x="50" y="19" className="clock-numeral-subtle" textAnchor="middle">12</text>
                  <text x="83.5" y="53" className="clock-numeral-subtle" textAnchor="middle">3</text>
                  <text x="50" y="86.5" className="clock-numeral-subtle" textAnchor="middle">6</text>
                  <text x="16.5" y="53" className="clock-numeral-subtle" textAnchor="middle">9</text>

                  {/* Hour Hand */}
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="28"
                    className="clock-hour-hand"
                    transform={`rotate(${clockHourAngle} 50 50)`}
                  />
                  {/* Minute Hand */}
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="20"
                    className="clock-minute-hand"
                    transform={`rotate(${clockMinuteAngle} 50 50)`}
                  />
                  <circle cx="50" cy="50" r="4" className="clock-center" />
                </svg>
              </div>

              <div className="duration-input-controls">
                <div className="input-unit-flex">
                  <input
                    type="number"
                    min="1"
                    max="300"
                    value={durationMinutes}
                    onChange={(e) => {
                      setDurationMinutes(parseInt(e.target.value, 10) || 15);
                      setUserEditedDuration(true);
                    }}
                    className="duration-input-prominent"
                  />
                  <span className="duration-unit-lbl">minutes</span>
                </div>

                {userEditedDuration && (
                  <button
                    type="button"
                    className="btn-reset-suggested"
                    onClick={() => {
                      setDurationMinutes(suggestedMinutes);
                      setUserEditedDuration(false);
                    }}
                  >
                    Reset to Suggested ({suggestedMinutes}m)
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Steppers Row (Full-width when Custom selected) */}
      {selectedPreset === 'custom' && (
        <div className="custom-steppers-fullrow glass-card">
          <h4 className="stepper-row-title">Custom Question Distribution</h4>
          <div className="horizontal-steppers-row">
            <div className="stepper-item-inline">
              <span className="badge badge-easy">Easy</span>
              <div className="stepper-controls-tight">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setCustomQuota(q => ({ ...q, Easy: Math.max(0, q.Easy - 1) }))}
                >-</button>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={customQuota.Easy}
                  onChange={e => setCustomQuota({ ...customQuota, Easy: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                  className="stepper-input-num"
                />
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setCustomQuota(q => ({ ...q, Easy: q.Easy + 1 }))}
                >+</button>
              </div>
              <span className="unit-label">questions</span>
            </div>

            <div className="stepper-item-inline">
              <span className="badge badge-medium">Medium</span>
              <div className="stepper-controls-tight">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setCustomQuota(q => ({ ...q, Medium: Math.max(0, q.Medium - 1) }))}
                >-</button>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={customQuota.Medium}
                  onChange={e => setCustomQuota({ ...customQuota, Medium: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                  className="stepper-input-num"
                />
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setCustomQuota(q => ({ ...q, Medium: q.Medium + 1 }))}
                >+</button>
              </div>
              <span className="unit-label">questions</span>
            </div>

            <div className="stepper-item-inline">
              <span className="badge badge-hard">Hard</span>
              <div className="stepper-controls-tight">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setCustomQuota(q => ({ ...q, Hard: Math.max(0, q.Hard - 1) }))}
                >-</button>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={customQuota.Hard}
                  onChange={e => setCustomQuota({ ...customQuota, Hard: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                  className="stepper-input-num"
                />
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setCustomQuota(q => ({ ...q, Hard: q.Hard + 1 }))}
                >+</button>
              </div>
              <span className="unit-label">questions</span>
            </div>
          </div>
        </div>
      )}

      {/* Row 2: Full-Width Focus Topics Section (Collapsed by Default) */}
      <div className="setup-full-width-topics">
        <section className="setup-section">
          <div className="section-header-flex">
            <button
              type="button"
              className="topics-toggle-btn"
              onClick={() => setIsTopicsExpanded(!isTopicsExpanded)}
            >
              <div className="toggle-left">
                <Filter size={16} />
                <span className="font-semibold">
                  Focus Topics ({selectedTopics.length}/{allTopics.length} Selected)
                </span>
              </div>
              {isTopicsExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {isTopicsExpanded && (
              <div className="topic-chip-actions">
                <button type="button" className="btn-chip-action" onClick={selectAllTopics}>
                  Select All
                </button>
                <button type="button" className="btn-chip-action" onClick={clearAllTopics}>
                  Clear
                </button>
              </div>
            )}
          </div>

          {isTopicsExpanded && (
            <div className="topics-grid-fullwidth mt-3">
              {allTopics.map(topic => {
                const isSelected = selectedTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    type="button"
                    className={`topic-chip ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleTopic(topic)}
                  >
                    {isSelected ? <CheckSquare size={14} /> : <Square size={14} />}
                    <span>{formatTopicName(topic)}</span>
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <div className="setup-footer">
        <div className="pool-info">
          <span className="pool-count">{totalQuestionsQuota}</span>
          <span className="pool-label">questions ({durationMinutes} mins)</span>
        </div>

        <button 
          className="btn btn-primary btn-start" 
          onClick={handleStart}
          disabled={totalQuestionsQuota <= 0 || availablePoolCount === 0}
        >
          <Play size={18} />
          <span>Start Sprint</span>
        </button>
      </div>

      <style>{`
        .sprint-setup-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .setup-header {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .setup-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .setup-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(var(--accent-rgb), 0.12);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .setup-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
        }

        .setup-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Two-Column Equal Height Layout */
        .setup-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .col-left, .col-right {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .section-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .mb-3 { margin-bottom: 0.75rem; }
        .mt-3 { margin-top: 0.75rem; }

        /* Square Preset Cards Grid */
        .square-presets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          flex: 1;
        }

        .square-preset-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.1rem 0.65rem;
          border-radius: var(--radius-lg);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
          gap: 0.4rem;
        }

        .square-preset-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: var(--bg-card-hover);
        }

        .square-preset-card.selected {
          border-color: var(--amber-main);
          background: rgba(var(--accent-rgb), 0.12);
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.2);
        }

        .preset-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preset-icon-theme {
          transition: color 0.2s ease;
        }

        .icon-unselected {
          color: var(--text-secondary);
        }

        .icon-selected {
          color: var(--amber-main);
        }

        .square-preset-card.selected .preset-icon-theme {
          animation: gentlePop 0.35s ease;
        }

        @keyframes gentlePop {
          0% { transform: scale(0.85); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        .preset-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .preset-compact-tag {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .square-preset-card.selected .preset-compact-tag {
          color: var(--amber-main);
        }

        /* Duration Panel & Suggested Pill Badge */
        .suggested-tag-pill {
          font-size: 0.78rem;
          color: var(--amber-main);
          font-weight: 600;
          background: rgba(var(--accent-rgb), 0.12);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .duration-expanded-panel {
          padding: 1.25rem;
          background: var(--bg-input);
          border-radius: var(--radius-lg);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .expanded-clock-body {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 0.5rem 0;
        }

        .clock-graphic-large {
          width: 180px;
          height: 180px;
          flex-shrink: 0;
        }

        .clock-svg {
          width: 100%;
          height: 100%;
        }

        .clock-face {
          fill: var(--bg-primary);
          stroke: var(--border-subtle);
          stroke-width: 3.5;
        }

        .clock-tick-major {
          stroke: var(--border-subtle);
          stroke-width: 2;
          stroke-linecap: round;
        }

        .clock-tick-minor {
          stroke: var(--border-subtle);
          stroke-width: 1.2;
          stroke-linecap: round;
          opacity: 0.5;
        }

        .clock-numeral-subtle {
          fill: var(--text-muted);
          font-family: var(--font-mono);
          font-weight: 400;
          font-size: 7px;
          opacity: 0.7;
        }

        .clock-hour-hand {
          stroke: var(--amber-main);
          stroke-width: 4.5;
          stroke-linecap: round;
          transition: transform 0.3s ease;
        }

        .clock-minute-hand {
          stroke: var(--gold-accent);
          stroke-width: 3.5;
          stroke-linecap: round;
          transition: transform 0.3s ease;
        }

        .clock-center {
          fill: var(--amber-main);
        }

        .duration-input-controls {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .input-unit-flex {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .duration-input-prominent {
          width: 95px;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.55rem 0.8rem;
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--amber-main);
          outline: none;
          text-align: center;
        }

        .duration-input-prominent:focus {
          border-color: var(--amber-main);
        }

        .duration-unit-lbl {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .btn-reset-suggested {
          background: transparent;
          color: var(--text-muted);
          font-size: 0.75rem;
          text-decoration: underline;
          text-align: left;
        }

        /* Full Row Custom Steppers Panel */
        .custom-steppers-fullrow {
          padding: 1.1rem 1.5rem;
          background: var(--bg-input);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stepper-row-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .horizontal-steppers-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .stepper-item-inline {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .stepper-controls-tight {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.4rem;
        }

        .stepper-btn {
          background: transparent;
          color: var(--text-primary);
          font-weight: 700;
          width: 24px;
          height: 24px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          cursor: pointer;
        }

        .stepper-btn:hover {
          background: var(--bg-card-hover);
        }

        .stepper-input-num {
          width: 40px;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          text-align: center;
          outline: none;
        }

        .unit-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Full Width Focus Topics Section */
        .setup-full-width-topics {
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.25rem;
        }

        .topics-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.25rem 0;
        }

        .toggle-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.92rem;
        }

        .topic-chip-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-chip-action {
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }

        .btn-chip-action:hover {
          color: var(--text-primary);
          background: var(--bg-card-hover);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .topics-grid-fullwidth {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .topic-chip {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .topic-chip.selected {
          background: rgba(59, 130, 246, 0.12);
          border-color: var(--accent-blue);
          color: #60a5fa;
        }

        .setup-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.25rem;
        }

        .pool-info {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }

        .pool-count {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--amber-main);
        }

        .pool-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .btn-start {
          padding: 0.85rem 2.25rem;
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .setup-two-col-grid {
            grid-template-columns: 1fr;
          }
          .square-presets-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .expanded-clock-body {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
