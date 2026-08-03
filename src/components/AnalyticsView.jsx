import React from 'react';
import { BarChart3, Award, Clock, CheckCircle2, ShieldAlert, Flame, Calendar, History, Zap } from 'lucide-react';
import { formatTopicName, inferConfidence } from './SessionSummary';

export default function AnalyticsView({ sessions, questionStates, questions, todayStats, settings = {} }) {
  const totalSprints = sessions.length;

  let totalQuestionsAttempted = 0;
  let totalSolved = 0;
  let totalGaveUp = 0;
  let totalTimeSec = 0;
  let totalPoints = 0;

  const confidenceCounts = { solid: 0, ok: 0, shaky: 0 };
  const topicStats = {};

  sessions.forEach(s => {
    totalPoints += s.points || 0;
    totalTimeSec += s.actualDurationSec || s.durationSec || 0;

    (s.results || []).forEach(r => {
      totalQuestionsAttempted += 1;
      if (r.status === 'done') {
        totalSolved += 1;
        // Read explicit confidence tagged by user, or compute auto-inferred fallback
        const conf = r.confidence || inferConfidence(r, settings);
        if (conf && confidenceCounts[conf] !== undefined) {
          confidenceCounts[conf] += 1;
        }
      } else if (r.status === 'gave_up') {
        totalGaveUp += 1;
      }

      if (!topicStats[r.topic]) {
        topicStats[r.topic] = { attempted: 0, solved: 0, shaky: 0, gaveUp: 0 };
      }
      topicStats[r.topic].attempted += 1;
      if (r.status === 'done') topicStats[r.topic].solved += 1;

      const conf = r.confidence || inferConfidence(r, settings);
      if (conf === 'shaky') topicStats[r.topic].shaky += 1;
      if (r.status === 'gave_up') topicStats[r.topic].gaveUp += 1;
    });
  });

  const accuracyRate = totalQuestionsAttempted > 0 
    ? Math.round((totalSolved / totalQuestionsAttempted) * 100) 
    : 0;

  const maxConfCount = Math.max(confidenceCounts.solid, confidenceCounts.ok, confidenceCounts.shaky, 1);

  let mostResurfacedTopic = null;
  let maxResurfacedCount = 0;
  Object.entries(topicStats).forEach(([topic, stat]) => {
    const sum = (stat.shaky || 0) + (stat.gaveUp || 0);
    if (sum > maxResurfacedCount) {
      maxResurfacedCount = sum;
      mostResurfacedTopic = topic;
    }
  });

  const formatHoursMin = (secs) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  const formatDate = (isoString) => {
    if (!isoString) return 'Recent';
    const d = new Date(isoString);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const getBarColorClass = (pct) => {
    if (pct === 100) return 'bar-fill-perfect';
    if (pct >= 50) return 'bar-fill-partial';
    return 'bar-fill-low';
  };

  return (
    <div className="analytics-container glass-card">
      <div className="analytics-header">
        <div>
          <h2 className="analytics-title">Performance Analytics</h2>
          <p className="analytics-subtitle">Track today's sprint metrics, lifetime stats, and topic mastery.</p>
        </div>
      </div>

      {/* TODAY'S FOCUS OVERVIEW SECTION */}
      <div className="stats-section-block">
        <div className="stats-section-header">
          <Zap size={16} className="text-amber" />
          <h3 className="section-title-sm">Today's Focus Overview</h3>
        </div>

        <div className="analytics-kpi-grid">
          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-amber">
              <Clock size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{todayStats ? todayStats.minutesFocused : 0}m</span>
              <span className="kpi-box-lbl">Minutes Focused</span>
            </div>
          </div>

          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-blue">
              <History size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{todayStats ? todayStats.sprintsCount : 0}</span>
              <span className="kpi-box-lbl">Sprints Run</span>
            </div>
          </div>

          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-easy">
              <CheckCircle2 size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{todayStats ? todayStats.questionsSolved : 0}</span>
              <span className="kpi-box-lbl">Questions Solved</span>
            </div>
          </div>

          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-gold">
              <Award size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val text-amber">+{todayStats ? todayStats.pointsEarned : 0}</span>
              <span className="kpi-box-lbl">Points Earned</span>
            </div>
          </div>
        </div>
      </div>

      {/* LIFETIME PERFORMANCE SECTION (Matching Today's Order) */}
      <div className="stats-section-block">
        <div className="stats-section-header">
          <History size={16} className="text-muted" />
          <h3 className="section-title-sm text-muted">Lifetime Performance</h3>
        </div>

        <div className="analytics-kpi-grid">
          {/* 1. Focus Time */}
          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-muted">
              <Clock size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{formatHoursMin(totalTimeSec)}</span>
              <span className="kpi-box-lbl">Lifetime Focus Time</span>
            </div>
          </div>

          {/* 2. Sprints Run */}
          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-muted">
              <History size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{totalSprints}</span>
              <span className="kpi-box-lbl">Total Lifetime Sprints</span>
            </div>
          </div>

          {/* 3. Questions Solved */}
          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-muted">
              <CheckCircle2 size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{totalSolved}</span>
              <span className="kpi-box-lbl">Total Solved</span>
            </div>
          </div>

          {/* 4. Solve Accuracy */}
          <div className="kpi-box">
            <div className="kpi-icon-wrapper icon-muted">
              <Award size={18} />
            </div>
            <div className="kpi-box-content">
              <span className="kpi-box-val">{accuracyRate}%</span>
              <span className="kpi-box-lbl">Solve Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="analytics-two-col">
        {/* Topic Mastery — Horizontal Bars */}
        <div className="panel-box">
          <h3 className="panel-title">
            <BarChart3 size={16} />
            <span>Topic Mastery Breakdown</span>
          </h3>

          <div className="topic-bars-list">
            {Object.keys(topicStats).length > 0 ? (
              Object.entries(topicStats).map(([topic, stat]) => {
                const solvePct = Math.round((stat.solved / stat.attempted) * 100);
                return (
                  <div key={topic} className="topic-bar-item">
                    <div className="bar-label-row">
                      <span className="topic-name">{formatTopicName(topic)}</span>
                      <span className="topic-ratio">{stat.solved}/{stat.attempted} solved ({solvePct}%)</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className={`bar-fill ${getBarColorClass(solvePct)}`}
                        style={{ width: `${solvePct}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-muted text-sm py-4 text-center">Complete sprints to generate topic mastery data.</p>
            )}
          </div>
        </div>

        {/* Confidence Distribution — Vertical Bar Chart */}
        <div className="panel-box">
          <h3 className="panel-title">
            <ShieldAlert size={16} />
            <span>Confidence Distribution</span>
          </h3>

          <div className="vertical-chart-stage">
            <div className="v-bars-wrapper conf-v-bars">
              <div className="v-bar-col">
                <span className="v-bar-val text-easy font-mono">{confidenceCounts.solid}</span>
                <div className="v-bar-track">
                  <div
                    className="v-bar-fill fill-v-solid"
                    style={{ height: `${Math.max(8, Math.round((confidenceCounts.solid / maxConfCount) * 100))}%` }}
                  />
                </div>
                <span className="v-bar-label font-semibold text-easy">Solid</span>
              </div>

              <div className="v-bar-col">
                <span className="v-bar-val text-blue font-mono">{confidenceCounts.ok}</span>
                <div className="v-bar-track">
                  <div
                    className="v-bar-fill fill-v-ok"
                    style={{ height: `${Math.max(8, Math.round((confidenceCounts.ok / maxConfCount) * 100))}%` }}
                  />
                </div>
                <span className="v-bar-label font-semibold text-blue">OK</span>
              </div>

              <div className="v-bar-col">
                <span className="v-bar-val text-amber font-mono">{confidenceCounts.shaky}</span>
                <div className="v-bar-track">
                  <div
                    className="v-bar-fill fill-v-shaky"
                    style={{ height: `${Math.max(8, Math.round((confidenceCounts.shaky / maxConfCount) * 100))}%` }}
                  />
                </div>
                <span className="v-bar-label font-semibold text-amber">Shaky</span>
              </div>
            </div>

            {mostResurfacedTopic ? (
              <div className="integrated-callout-box mt-3">
                <Flame size={16} className="text-amber" />
                <span>Most Resurfaced: <strong>{formatTopicName(mostResurfacedTopic)}</strong> ({maxResurfacedCount} shaky/gave up)</span>
              </div>
            ) : (
              <div className="integrated-callout-box mt-3">
                <Flame size={16} className="text-muted" />
                <span>Gave Up Total: <strong>{totalGaveUp}</strong> questions</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Sprint Log Section */}
      <div className="panel-box log-panel-box">
        <h3 className="panel-title">
          <Calendar size={16} />
          <span>Recent Sprint Log</span>
        </h3>

        <div className="table-responsive-clean">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date / Time</th>
                <th>Duration</th>
                <th>Attempted</th>
                <th>Solved</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {sessions.length > 0 ? (
                [...sessions].reverse().slice(0, 10).map((sess, i) => {
                  const solvedInSess = (sess.results || []).filter(r => r.status === 'done').length;
                  return (
                    <tr key={i}>
                      <td className="font-mono">{formatDate(sess.startedAt)}</td>
                      <td>{formatHoursMin(sess.actualDurationSec || sess.durationSec)}</td>
                      <td>{(sess.results || []).length} questions</td>
                      <td>
                        <span className="badge badge-easy">
                          {solvedInSess} solved
                        </span>
                      </td>
                      <td className="font-mono text-amber">+{sess.points} pts</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-muted">
                    No sprint history recorded yet. Start your first sprint!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .analytics-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .analytics-header {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .analytics-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
        }

        .analytics-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .stats-section-block {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stats-section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-title-sm {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .analytics-kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .kpi-box {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .kpi-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-amber { background: rgba(249, 115, 22, 0.12); color: var(--amber-main); border: 1px solid rgba(249, 115, 22, 0.25); }
        .icon-blue { background: rgba(59, 130, 246, 0.12); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.25); }
        .icon-easy { background: var(--easy-bg); color: var(--easy-color); border: 1px solid rgba(16, 185, 129, 0.25); }
        .icon-gold { background: rgba(251, 191, 36, 0.12); color: var(--gold-accent); border: 1px solid rgba(251, 191, 36, 0.25); }
        .icon-muted { background: var(--bg-card); color: var(--text-muted); border: 1px solid var(--border-subtle); }

        .kpi-box-content {
          display: flex;
          flex-direction: column;
        }

        .kpi-box-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.45rem;
          color: var(--text-primary);
        }

        .kpi-box-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .analytics-two-col {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 1.25rem;
        }

        .panel-box {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .topic-bars-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 280px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .topic-bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .bar-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
        }

        .topic-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .topic-ratio {
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .bar-track {
          width: 100%;
          height: 8px;
          background: var(--bg-primary);
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .bar-fill-perfect { background: linear-gradient(90deg, #10b981 0%, #059669 100%); }
        .bar-fill-partial { background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%); }
        .bar-fill-low { background: linear-gradient(90deg, #ef4444 0%, #b91c1c 100%); }

        .vertical-chart-stage {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 200px;
          justify-content: flex-end;
        }

        .v-bars-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          height: 160px;
        }

        .conf-v-bars {
          justify-content: space-around;
        }

        .v-bar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          flex: 1;
          height: 100%;
          justify-content: flex-end;
        }

        .v-bar-val {
          font-size: 0.82rem;
          font-weight: 700;
        }

        .v-bar-track {
          width: 28px;
          height: 110px;
          background: var(--bg-primary);
          border-radius: 6px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .v-bar-fill {
          width: 100%;
          border-radius: 6px;
          transition: height 0.5s ease;
        }

        .fill-v-solid { background: linear-gradient(180deg, #10b981 0%, #059669 100%); }
        .fill-v-ok { background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%); }
        .fill-v-shaky { background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%); }

        .v-bar-label {
          font-size: 0.8rem;
          text-align: center;
        }

        .integrated-callout-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          color: var(--text-primary);
        }

        .mt-3 { margin-top: 0.75rem; }

        .table-responsive-clean {
          overflow-x: auto;
          width: 100%;
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .history-table th, .history-table td {
          padding: 0.75rem 0.85rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
        }

        .history-table th {
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        @media (max-width: 800px) {
          .analytics-kpi-grid { grid-template-columns: repeat(2, 1fr); }
          .analytics-two-col { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
