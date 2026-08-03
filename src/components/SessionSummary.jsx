import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Award, CheckCircle2, XCircle, Clock, Home, Play, Edit3 } from 'lucide-react';

export function formatTopicName(topic) {
  if (!topic) return '';
  const mappings = {
    'Dynamic Programming': 'DP',
    'Priority Queue': 'PQ',
    'Heap / Priority Queue': 'Heap / PQ',
    'Bit Manipulation': 'Bit Manipulation',
    'Arrays & Hashing': 'Arrays & Hashing',
    'Sliding Window': 'Sliding Window',
    'Two Pointers': 'Two Pointers',
    'Binary Search': 'Binary Search',
    'Stack & Queue': 'Stack & Queue',
    'Linked List': 'Linked List'
  };
  return mappings[topic] || topic;
}

export function inferConfidence(result, settings = {}) {
  if (result.status !== 'done') return null;
  const weights = settings.timeWeightsByDifficulty || { Easy: 4, Medium: 8, Hard: 15 };
  const targetMin = weights[result.difficulty] || 5;
  const targetSec = targetMin * 60;
  
  const attemptsCount = (result.attempts || 0) + 1;

  if (attemptsCount === 1 && result.timeSec <= targetSec * 0.75) {
    return 'solid';
  }
  if (attemptsCount >= 2 || result.timeSec > targetSec) {
    return 'shaky';
  }
  return 'ok';
}

export default function SessionSummary({
  session,
  settings,
  onStartNewSprint,
  onGoHome,
  onUpdateSessionConfidence
}) {
  const {
    id: sessionId,
    results = [],
    points = 0,
    maxPossiblePoints = 100,
    totalQuota = 0,
    actualDurationSec,
    durationSec,
    isEndedEarly = false
  } = session || {};

  // Fixed floating popover state: { qId, top, left }
  const [popoverState, setPopoverState] = useState(null);

  // Local overrides for instant UI updates
  const [localConfOverrides, setLocalConfOverrides] = useState({});

  const localResults = results;
  const totalTarget = totalQuota || localResults.length;

  const doneCount = localResults.filter(r => r.status === 'done').length;
  const gaveUpCount = localResults.filter(r => r.status === 'gave_up').length;
  const resolvedCount = doneCount + gaveUpCount;

  // Sprint Outcome Classification Logic
  let sprintOutcomeState = 'ended_early';
  if (isEndedEarly) {
    sprintOutcomeState = 'ended_early';
  } else if (doneCount >= totalTarget && totalTarget > 0) {
    sprintOutcomeState = 'complete';
  } else if (resolvedCount >= totalTarget && totalTarget > 0) {
    sprintOutcomeState = 'finished';
  } else {
    sprintOutcomeState = 'times_up';
  }

  const formatHoursMinSec = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const getOutcomeTitleAndBadge = () => {
    switch (sprintOutcomeState) {
      case 'complete':
        return {
          title: 'Sprint Complete! 🎉',
          badgeClass: 'badge-outcome-complete',
          badgeText: '100% Solved'
        };
      case 'finished':
        return {
          title: 'Sprint Finished 💪',
          badgeClass: 'badge-outcome-finished',
          badgeText: 'Fully Resolved'
        };
      case 'times_up':
        return {
          title: "Time's Up ⏱️",
          badgeClass: 'badge-outcome-timesup',
          badgeText: 'Time Expired'
        };
      case 'ended_early':
      default:
        return {
          title: 'Sprint Ended Early 🛑',
          badgeClass: 'badge-outcome-early',
          badgeText: 'Stopped Early'
        };
    }
  };

  const outcomeInfo = getOutcomeTitleAndBadge();

  const renderFeedbackMessage = () => {
    if (sprintOutcomeState === 'complete') {
      return `Flawless performance! You conquered all ${doneCount} questions in your sprint before time ran out.`;
    } else if (sprintOutcomeState === 'finished') {
      return `Great focus! Sprint questions fully resolved (${doneCount} Solved, ${gaveUpCount} Gave Up). Weighted resurfacing will prioritize gave-up topics.`;
    } else if (sprintOutcomeState === 'times_up') {
      return `Timer expired with ${resolvedCount} of ${totalTarget} questions resolved (${doneCount} Solved, ${gaveUpCount} Gave Up).`;
    } else {
      return `Sprint stopped early. ${doneCount} solved and ${gaveUpCount} gave up out of ${totalTarget} questions.`;
    }
  };

  // Close floating popover on click outside
  useEffect(() => {
    const handleOutsideClick = () => setPopoverState(null);
    if (popoverState) {
      const timer = setTimeout(() => {
        window.addEventListener('click', handleOutsideClick);
      }, 10);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [popoverState]);

  const handleChipClick = (e, qId) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (popoverState && popoverState.qId === qId) {
      setPopoverState(null);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      setPopoverState({
        qId,
        top: Math.round(rect.bottom + 4),
        left: Math.round(rect.left)
      });
    }
  };

  const handleSelectOption = (confidence) => {
    if (popoverState && popoverState.qId) {
      const targetQId = popoverState.qId;
      setLocalConfOverrides(prev => ({
        ...prev,
        [targetQId]: confidence
      }));
      onUpdateSessionConfidence(sessionId, targetQId, confidence);
    }
    setPopoverState(null);
  };

  return (
    <div className="summary-container glass-card">
      {/* Header Banner */}
      <div className="summary-header">
        <div className="banner-title-row">
          <h2 className="summary-title">{outcomeInfo.title}</h2>
          <span className={`outcome-status-chip ${outcomeInfo.badgeClass}`}>
            {outcomeInfo.badgeText}
          </span>
        </div>
        <p className="summary-subtitle">{renderFeedbackMessage()}</p>
      </div>

      {/* KPI Stats Grid */}
      <div className="kpi-summary-grid">
        <div className="kpi-card">
          <div className="kpi-icon-group icon-gold">
            <Award size={20} />
          </div>
          <div className="kpi-info">
            <span className="kpi-value text-gold">+{points} pts</span>
            <span className="kpi-label">Points Earned (Max {maxPossiblePoints})</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-group icon-green">
            <CheckCircle2 size={20} />
          </div>
          <div className="kpi-info">
            <span className="kpi-value">{doneCount} / {totalTarget}</span>
            <span className="kpi-label">Questions Solved</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-group icon-blue">
            <Clock size={20} />
          </div>
          <div className="kpi-info">
            <span className="kpi-value font-mono">{formatHoursMinSec(actualDurationSec || 0)}</span>
            <span className="kpi-label">Time Spent (Limit {Math.round((durationSec || 0) / 60)}m)</span>
          </div>
        </div>
      </div>

      {/* Action Navigation Buttons */}
      <div className="summary-actions-top">
        <button className="btn btn-secondary" onClick={onGoHome}>
          <Home size={16} />
          <span>Return to Dashboard</span>
        </button>

        <button className="btn btn-primary btn-start" onClick={onStartNewSprint}>
          <Play size={16} />
          <span>Start Another Sprint</span>
        </button>
      </div>

      {/* Question Breakdown Table */}
      <div className="breakdown-section">
        <div className="breakdown-header">
          <h3 className="section-title">Question Breakdown</h3>
        </div>

        <div className="table-responsive">
          <table className="breakdown-table">
            <thead>
              <tr>
                <th className="col-status-wide">Status</th>
                <th>Question Name</th>
                <th>Topic</th>
                <th>Diff</th>
                <th>Attempts</th>
                <th>Time Spent</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {localResults.length > 0 ? (
                localResults.map((r, idx) => {
                  const displayConfidence = localConfOverrides[r.questionId] || r.confidence || inferConfidence(r, settings);

                  return (
                    <tr key={idx} className={r.status === 'done' ? 'row-done' : 'row-gave-up'}>
                      {/* Status Column */}
                      <td className="col-status-wide">
                        {r.status === 'done' ? (
                          <span className="status-pill status-solved">
                            <CheckCircle2 size={14} /> Solved
                          </span>
                        ) : (
                          <span className="status-pill status-gaveup">
                            <XCircle size={14} /> Gave Up
                          </span>
                        )}
                      </td>

                      {/* Question Name */}
                      <td className="font-semibold text-primary">{r.questionName}</td>

                      {/* Topic Pill */}
                      <td>
                        <span className="badge badge-topic">
                          {formatTopicName(r.topic)}
                        </span>
                      </td>

                      {/* Difficulty */}
                      <td>
                        <span className={`badge badge-${(r.difficulty || 'easy').toLowerCase()}`}>
                          {r.difficulty}
                        </span>
                      </td>

                      {/* Attempts */}
                      <td className="font-mono text-center">
                        <span className="attempts-count">{(r.attempts || 0) + 1}</span>
                      </td>

                      {/* Time Spent */}
                      <td className="font-mono text-muted">{r.timeSec ? `${r.timeSec}s` : '-'}</td>

                      {/* Confidence Selector Cell */}
                      <td>
                        {r.status === 'done' ? (
                          <button
                            type="button"
                            className={`conf-pill-btn conf-${displayConfidence}`}
                            onClick={(e) => handleChipClick(e, r.questionId)}
                            title="Click to override confidence"
                          >
                            <span className="conf-dot" />
                            <span className="conf-label">{displayConfidence ? displayConfidence.toUpperCase() : 'SET'}</span>
                            <Edit3 size={11} className="conf-pencil-icon" />
                          </button>
                        ) : (
                          <span className="text-muted text-xs italic">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-muted">
                    No questions recorded in this sprint.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Theme-aware Portal Popover Menu rendered directly onto document.body */}
      {popoverState && createPortal(
        <div
          className="portal-conf-popover"
          style={{
            position: 'fixed',
            top: `${popoverState.top}px`,
            left: `${popoverState.left}px`,
            zIndex: 999999
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="popover-header-title">Select Confidence:</div>
          <button
            type="button"
            className="popover-option-btn option-solid"
            onClick={() => handleSelectOption('solid')}
          >
            <span className="conf-dot dot-solid" />
            <span>Solid</span>
          </button>

          <button
            type="button"
            className="popover-option-btn option-ok"
            onClick={() => handleSelectOption('ok')}
          >
            <span className="conf-dot dot-ok" />
            <span>OK</span>
          </button>

          <button
            type="button"
            className="popover-option-btn option-shaky"
            onClick={() => handleSelectOption('shaky')}
          >
            <span className="conf-dot dot-shaky" />
            <span>Shaky</span>
          </button>
        </div>,
        document.body
      )}

      <style>{`
        .summary-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .summary-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1rem;
          gap: 0.35rem;
        }

        .banner-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .summary-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .outcome-status-chip {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badge-outcome-complete {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.35);
        }

        .badge-outcome-finished {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.35);
        }

        .badge-outcome-timesup {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.35);
        }

        .badge-outcome-early {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.35);
        }

        .summary-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .kpi-summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .kpi-icon-group {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-gold { background: rgba(251, 191, 36, 0.12); color: var(--gold-accent); border: 1px solid rgba(251, 191, 36, 0.25); }
        .icon-green { background: var(--easy-bg); color: var(--easy-color); border: 1px solid rgba(16, 185, 129, 0.25); }
        .icon-blue { background: rgba(59, 130, 246, 0.12); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.25); }

        .kpi-info {
          display: flex;
          flex-direction: column;
        }

        .kpi-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .kpi-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .summary-actions-top {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
        }

        .breakdown-section {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .breakdown-header {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
        }

        .table-responsive {
          overflow-x: auto;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .breakdown-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          background: var(--bg-input);
        }

        .breakdown-table th, .breakdown-table td {
          padding: 0.85rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
        }

        .breakdown-table th {
          background: var(--bg-card);
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        .col-status-wide {
          width: 130px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
        }

        .status-solved {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-gaveup {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        .conf-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 800;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .conf-pill-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .conf-pencil-icon {
          opacity: 0.7;
          margin-left: 0.15rem;
        }

        .conf-solid {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.4);
        }

        .conf-ok {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.4);
        }

        .conf-shaky {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.4);
        }

        .conf-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
        }

        .conf-solid .conf-dot { background: #10b981; }
        .conf-ok .conf-dot { background: #60a5fa; }
        .conf-shaky .conf-dot { background: #f59e0b; }

        /* Theme-Aware Portal Popover Menu rendered directly onto document.body */
        .portal-conf-popover {
          position: fixed !important;
          z-index: 999999 !important;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0.65rem;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
          min-width: 130px;
          animation: fadeIn 0.12s ease;
          color: var(--text-primary);
        }

        .popover-header-title {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.15rem;
        }

        .popover-option-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.65rem;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 700;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s ease;
        }

        .popover-option-btn:hover {
          background: var(--bg-card-hover);
        }

        .option-solid { color: #10b981; }
        .option-ok { color: #60a5fa; }
        .option-shaky { color: #f59e0b; }

        .dot-solid { background: #10b981; }
        .dot-ok { background: #60a5fa; }
        .dot-shaky { background: #f59e0b; }
      `}</style>
    </div>
  );
}
