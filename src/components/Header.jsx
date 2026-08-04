import React from 'react';
import { Database, BarChart3, Settings, Zap, Moon, Sun, Clock, Triangle, PawPrint, RefreshCw } from 'lucide-react';

export default function Header({ 
  activeTab, 
  onSelectTab, 
  todayFocusMinutes = 0,
  vetoMinutes = 0,
  vetoEnabled = true,
  onOpenVetoModal,
  settings = {}, 
  onToggleTheme,
  isSyncing = false,
  onSyncCloud
}) {
  const isDark = settings?.theme !== 'light';

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Brand Logo with Dynamic Chroma Shift Animated Triangle */}
        <div className="brand-group" onClick={() => onSelectTab('sprint')}>
          <Triangle className="brand-icon" size={24} strokeWidth={1.75} />
          <div className="brand-text">
            <span className="brand-name">Sprintset</span>
            <span className="brand-tagline">DSA Focus Sprint</span>
          </div>
        </div>

        {/* Navigation Tabs (Sprint, Question Bank, Analytics) */}
        <nav className="nav-tabs">
          <button 
            className={`nav-btn ${activeTab === 'sprint' ? 'active' : ''}`}
            onClick={() => onSelectTab('sprint')}
          >
            <Zap size={18} />
            <span>Sprint</span>
          </button>

          <button 
            className={`nav-btn ${activeTab === 'bank' ? 'active' : ''}`}
            onClick={() => onSelectTab('bank')}
          >
            <Database size={18} />
            <span>Question Bank</span>
          </button>

          <button 
            className={`nav-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => onSelectTab('analytics')}
          >
            <BarChart3 size={18} />
            <span>Analytics</span>
          </button>
        </nav>

        {/* Right Metric Pill & Actions */}
        <div className="header-right">
          {/* Cloud Sync Indicator */}
          {isSyncing && (
            <div className="today-metric-pill sync-indicator-pill" title="Syncing with Cloud">
              <RefreshCw size={14} className="sync-spin" />
              <span className="text-xs font-semibold">Syncing</span>
            </div>
          )}

          {/* Today's Focus Metric */}
          <div className="today-metric-pill" title="Total focus minutes logged today">
            <Clock size={15} className="text-amber" />
            <span><strong>{todayFocusMinutes}m</strong> focused</span>
          </div>

          {/* Veto Cat Mascot Time Bank Metric */}
          {vetoEnabled && (
            <button 
              type="button"
              className="today-metric-pill veto-metric-pill"
              onClick={onOpenVetoModal}
              title="Veto Time Bank Rewards"
            >
              <PawPrint size={15} className="text-amber" />
              <span><strong>+{vetoMinutes}m</strong> Veto</span>
            </button>
          )}

          <button 
            className="icon-btn" 
            onClick={onToggleTheme} 
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className={`icon-btn ${isSyncing ? 'sync-spin' : ''}`}
            onClick={onSyncCloud}
            disabled={isSyncing}
            title="Force Cloud Sync"
          >
            <RefreshCw size={18} />
          </button>

          <button 
            className={`icon-btn ${activeTab === 'settings' ? 'active-icon' : ''}`}
            onClick={() => onSelectTab('settings')} 
            title="Settings"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .header-container {
          background: var(--bg-card);
          backdrop-filter: var(--glass-backdrop);
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 0.75rem 1.5rem;
        }

        .header-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .brand-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
        }

        .brand-icon {
          color: var(--amber-main);
          flex-shrink: 0;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .brand-group:hover .brand-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 6px rgba(var(--accent-rgb), 0.6));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .brand-tagline {
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .nav-tabs {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: var(--bg-input);
          padding: 0.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .nav-btn:hover {
          color: var(--text-primary);
        }

        .nav-btn.active {
          background: var(--bg-card-hover);
          color: var(--amber-main);
          box-shadow: var(--shadow-sm);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .today-metric-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .sync-indicator-pill {
          background: rgba(14, 165, 233, 0.1);
          border-color: rgba(14, 165, 233, 0.3);
          color: #0ea5e9;
        }
        
        .sync-spin {
          animation: spin 1.5s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .today-metric-pill strong {
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .icon-btn:hover, .icon-btn.active-icon {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
          background: var(--bg-card-hover);
        }

        @media (max-width: 768px) {
          .nav-btn span {
            display: none;
          }
          .brand-tagline {
            display: none;
          }
          .today-metric-pill span {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </header>
  );
}
