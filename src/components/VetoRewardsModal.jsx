import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Shield, Zap, Clock, CheckCircle2, Copy, ExternalLink, RefreshCw, X, Key } from 'lucide-react';
import { DEFAULT_SYNC_KEY, generateVetoDeepLink } from '../utils/cloudSync';

export default function VetoRewardsModal({
  isOpen,
  onClose,
  unclaimedPoints = 0,
  syncKey = DEFAULT_SYNC_KEY,
  onUpdateSyncKey,
  onClaimPoints,
  onSyncCloud
}) {
  const [isEditingKey, setIsEditingKey] = useState(false);
  const [keyInput, setKeyInput] = useState(syncKey || DEFAULT_SYNC_KEY);
  const [copiedToast, setCopiedToast] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  if (!isOpen) return null;

  const currentKey = (syncKey || DEFAULT_SYNC_KEY).toUpperCase();
  const conversionRate = 100;
  const earnedMinutes = Math.floor(unclaimedPoints / conversionRate);
  const deepLink = generateVetoDeepLink(unclaimedPoints, conversionRate, currentKey);

  const handleSaveKey = (e) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    const cleanKey = keyInput.trim().toUpperCase();
    if (onUpdateSyncKey) onUpdateSyncKey(cleanKey);
    setIsEditingKey(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(deepLink);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  const handleClaimClick = () => {
    // Open deep link
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
              <Shield size={22} className="text-amber" />
            </div>
            <div>
              <h3>Veto Time Bank Rewards</h3>
              <p className="text-xs text-muted">Earn screen time by finishing DSA Sprints</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="veto-body">
          {/* Sync Key Pill */}
          <div className="sync-key-box glass-card">
            <div className="sync-key-header">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Key size={13} />
                <span>Active Sync Key:</span>
              </span>
              {!isEditingKey && (
                <button
                  type="button"
                  className="text-xs text-amber font-semibold hover:underline"
                  onClick={() => {
                    setKeyInput(currentKey);
                    setIsEditingKey(true);
                  }}
                >
                  Edit Key
                </button>
              )}
            </div>

            {isEditingKey ? (
              <form onSubmit={handleSaveKey} className="sync-key-form">
                <input
                  type="text"
                  required
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value.toUpperCase())}
                  placeholder="e.g. PADHLEBSDK, CYBER, STREAK..."
                  className="input-field-full text-center font-mono font-bold uppercase"
                  autoFocus
                />
                <div className="flex gap-2 justify-center mt-2">
                  <button
                    type="button"
                    className="btn btn-secondary text-xs"
                    onClick={() => setIsEditingKey(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary text-xs">
                    Save Key
                  </button>
                </div>
              </form>
            ) : (
              <div className="sync-key-display">
                <span className="key-badge">{currentKey}</span>
              </div>
            )}
          </div>

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
          <div className="veto-actions mt-4">
            <button
              type="button"
              className="btn btn-primary btn-claim-veto full-width"
              onClick={handleClaimClick}
              disabled={unclaimedPoints <= 0}
            >
              <ExternalLink size={18} />
              <span>Claim {earnedMinutes} Mins in Veto App</span>
            </button>

            <div className="secondary-veto-actions">
              <button
                type="button"
                className="btn btn-secondary text-xs"
                onClick={handleCopyLink}
              >
                <Copy size={14} />
                <span>{copiedToast ? 'Copied Deep Link!' : 'Copy Claim Link'}</span>
              </button>

              <button
                type="button"
                className="btn btn-secondary text-xs"
                onClick={handleSyncClick}
                disabled={isSyncing}
              >
                <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
                <span>{isSyncing ? 'Syncing...' : 'Sync Cloud'}</span>
              </button>
            </div>
          </div>

          <p className="veto-footer-note text-xs text-muted text-center mt-3">
            100 Sprintset Points = 1 Minute of Veto Time Bank credit. Tap above on mobile to launch Veto!
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
