import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Copy, Download, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function VetoCouponModal({ isOpen, onClose, sessions = [], vetoEnabled = false }) {
  const [showCoupon, setShowCoupon] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);

  if (!isOpen) return null;

  const coupons = sessions
    .filter(s => s.vetoCoupon && s.rewardMinutes > 0)
    .map((s, idx) => ({
      id: idx,
      coupon: s.vetoCoupon,
      minutes: s.rewardMinutes,
      date: s.startedAt ? new Date(s.startedAt).toLocaleDateString() : 'Recent',
      sessionId: s.id
    }));

  const handleCopyCoupon = (idx, coupon) => {
    navigator.clipboard.writeText(coupon);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleDownloadCoupons = () => {
    const data = coupons.map(c => ({
      sessionId: c.sessionId,
      coupon: c.coupon,
      rewardMinutes: c.minutes,
      date: c.date
    }));
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `veto-coupons-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return createPortal(
    <div className="veto-modal-overlay" onClick={onClose}>
      <div className="veto-modal-content glass-card" onClick={e => e.stopPropagation()}>
        <div className="veto-modal-header">
          <div className="veto-modal-title-group">
            <h2 className="veto-modal-title">Veto Reward Coupons</h2>
            <p className="veto-modal-subtitle">Earned screen time coupons from completed sprints</p>
          </div>
          <button className="icon-btn icon-btn-close" onClick={onClose} title="Close">
            <X size={20} />
          </button>
        </div>

        <div className="veto-modal-body">
          {!vetoEnabled ? (
            <div className="veto-info-banner banner-warning">
              <AlertCircle size={16} />
              <span>Veto integration is disabled in Settings. Enable it to earn coupons.</span>
            </div>
          ) : coupons.length === 0 ? (
            <div className="veto-empty-state">
              <p className="text-muted">No coupons earned yet. Complete sprints to generate Veto reward coupons!</p>
            </div>
          ) : (
            <div className="veto-coupons-list">
              {coupons.map((item, idx) => (
                <div key={idx} className="veto-coupon-card">
                  <div className="coupon-header">
                    <div className="coupon-info">
                      <span className="coupon-reward font-semibold text-amber">+{item.minutes}m</span>
                      <span className="coupon-date text-muted text-xs">{item.date}</span>
                    </div>
                    <button
                      type="button"
                      className="icon-btn icon-btn-sm"
                      onClick={() => setShowCoupon(showCoupon === idx ? null : idx)}
                      title={showCoupon === idx ? 'Hide coupon' : 'Show coupon'}
                    >
                      {showCoupon === idx ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>

                  {showCoupon === idx && (
                    <div className="coupon-display">
                      <div className="coupon-text font-mono">
                        {item.coupon}
                      </div>
                      <div className="coupon-actions">
                        <button
                          type="button"
                          className={`btn btn-sm ${copiedIdx === idx ? 'btn-success' : 'btn-secondary'}`}
                          onClick={() => handleCopyCoupon(idx, item.coupon)}
                        >
                          <Copy size={13} />
                          <span>{copiedIdx === idx ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {coupons.length > 0 && (
          <div className="veto-modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleDownloadCoupons}>
              <Download size={14} />
              <span>Download All</span>
            </button>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>

      <style>{`
        .veto-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(4px);
        }

        .veto-modal-content {
          width: 100%;
          max-width: 600px;
          max-height: 80vh;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
        }

        .veto-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          gap: 1rem;
        }

        .veto-modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .veto-modal-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .veto-modal-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .icon-btn-close {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        }

        .veto-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .veto-info-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .banner-warning {
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.25);
          color: #f97316;
        }

        .veto-empty-state {
          text-align: center;
          padding: 3rem 1rem;
        }

        .veto-coupons-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .veto-coupon-card {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .coupon-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .coupon-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .coupon-reward {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .coupon-display {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .coupon-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          word-break: break-all;
          line-height: 1.4;
          padding: 0.5rem;
          background: var(--bg-card);
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-subtle);
        }

        .coupon-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-sm {
          padding: 0.4rem 0.75rem;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .btn-success {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.35);
        }

        .btn-success:hover {
          background: rgba(16, 185, 129, 0.25);
        }

        .veto-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          padding: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
          .veto-modal-content { max-width: calc(100vw - 2rem); }
          .btn-sm span { display: none; }
        }
      `}</style>
    </div>,
    document.body
  );
}
