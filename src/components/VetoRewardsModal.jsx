import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { PawPrint, Zap, Clock, Copy, X, RefreshCw } from 'lucide-react';

export default function VetoRewardsModal({
  isOpen,
  onClose,
  unclaimedPoints = 0,
  onClaimPoints,
  onSyncCloud
}) {
  const [copiedToast, setCopiedToast] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  if (!isOpen) return null;

  const conversionRate = 100;
  const earnedMinutes = Math.floor(unclaimedPoints / conversionRate);
  const minutes = Math.floor(unclaimedPoints / 100);
  const deepLink = `veto://claim-reward?points=${unclaimedPoints}&minutes=${minutes}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(deepLink);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  const handleClaimClick = () => {
    window.location.href = deepLink;
    if (onClaimPoints) onClaimPoints(unclaimedPoints);
  };

  const handleSyncClick = async () => {
    setIsSyncing(true);
    if (onSyncCloud) await onSyncCloud();
    setTimeout(() => setIsSyncing(false), 800);
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card glass-card veto-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="veto-title-group">
            <div className="veto-icon-badge">
              <PawPrint size={22} className="text-amber" />
            </div>
            <div>
              <h3>Veto Time Bank Rewards</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.75, maxWidth: '280px', lineHeight: '1.3', marginTop: '0.35rem', fontWeight: 500 }}>
                Convert your hard-earned focus points into guilt-free screen time on your phone.
              </p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="veto-body">
          {/* Points & Time Stats */}
          <div className="veto-stats-grid">
            <div className="veto-stat-card">
              <div className="stat-icon-wrapper">
                <Zap size={20} className="text-amber" />
              </div>
              <span className="stat-label">Unclaimed Points</span>
              <span className="stat-value text-amber">{unclaimedPoints.toLocaleString()}</span>
            </div>

            <div className="veto-stat-card">
              <div className="stat-icon-wrapper">
                <Clock size={20} className="text-emerald" />
              </div>
              <span className="stat-label">Veto Time Credit</span>
              <span className="stat-value text-emerald">+{earnedMinutes} min</span>
            </div>
          </div>

          {/* Actions */}
          <div className="veto-actions" style={{ marginTop: '1.25rem' }}>
            <button
              type="button"
              className="btn btn-claim-veto full-width"
              onClick={handleClaimClick}
              disabled={unclaimedPoints <= 0}
              style={{ 
                padding: '1.25rem 1.5rem', 
                fontSize: '1.15rem', 
                fontWeight: 800,
                background: 'rgb(var(--accent-rgb))',
                border: 'none',
                boxShadow: '0 4px 14px 0 rgba(var(--accent-rgb), 0.4)',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.2s ease',
                borderRadius: 'var(--radius-lg)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(var(--accent-rgb), 0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(var(--accent-rgb), 0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span>Transfer to Veto</span>
            </button>

            <div className="secondary-veto-actions">
              <button
                type="button"
                className={`btn btn-secondary-veto btn-copy-link ${copiedToast ? 'copied' : ''}`}
                onClick={handleCopyLink}
              >
                <Copy size={15} />
                <span>{copiedToast ? 'Copied Deep Link!' : 'Copy Claim Link'}</span>
              </button>

              <button
                type="button"
                className={`btn btn-secondary-veto btn-sync-veto ${isSyncing ? 'syncing' : ''}`}
                onClick={handleSyncClick}
                disabled={isSyncing}
              >
                <RefreshCw size={15} className={isSyncing ? 'sync-spin' : ''} />
                <span>{isSyncing ? 'Syncing...' : 'Sync Cloud'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
