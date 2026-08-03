import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, XCircle, SkipForward, PlusCircle, Check } from 'lucide-react';

export default function QuestionCard({
  question,
  attempts,
  onIncrementAttempts,
  onDone,
  onSkip,
  onGaveUp
}) {
  const [isSuccessAnimating, setIsSuccessAnimating] = useState(false);

  if (!question) return null;

  const handleDoneClick = () => {
    setIsSuccessAnimating(true);
    // Give a brief 350ms animation pulse before invoking onDone
    setTimeout(() => {
      setIsSuccessAnimating(false);
      onDone();
    }, 350);
  };

  const getDiffBadgeClass = (diff) => {
    switch (diff) {
      case 'Easy': return 'badge-easy';
      case 'Hard': return 'badge-hard';
      default: return 'badge-medium';
    }
  };

  return (
    <div className={`question-card glass-card ${isSuccessAnimating ? 'pulse-success' : ''}`}>
      {/* Top Header Row */}
      <div className="card-top-bar">
        <div className="badge-group">
          <span className={`badge ${getDiffBadgeClass(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className="badge badge-topic">
            {question.topic}
          </span>
          {question.sheet && (
            <span className="badge-sheet">
              {question.sheet}
            </span>
          )}
        </div>

        <div className="attempts-pill" title="Number of incorrect submissions logged">
          <span>Attempts: </span>
          <strong className="attempts-count">{attempts}</strong>
        </div>
      </div>

      {/* Centered Question Content */}
      <div className="question-center-group">
        <h2 className="question-title-centered">{question.name}</h2>

        <a
          href={question.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline open-link-btn"
        >
          <span>Open on LeetCode / GFG</span>
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Large Dominant Primary Done Button */}
      <div className="primary-action-container">
        <button
          className={`btn-done-primary ${isSuccessAnimating ? 'animating' : ''}`}
          onClick={handleDoneClick}
          disabled={isSuccessAnimating}
        >
          {isSuccessAnimating ? (
            <Check size={32} className="check-anim" />
          ) : (
            <CheckCircle2 size={28} />
          )}
          <span>{isSuccessAnimating ? 'Solved!' : 'Done (Mark Solved)'}</span>
        </button>
      </div>

      {/* Secondary Actions Row */}
      <div className="secondary-actions-row">
        <button
          className="sec-action-btn attempt-btn"
          onClick={onIncrementAttempts}
          title="Record an incorrect submission (+1 attempt)"
        >
          <PlusCircle size={16} />
          <span>Wrong Submission (+1)</span>
        </button>

        <button
          className="sec-action-btn skip-btn"
          onClick={onSkip}
          title="Skip question (0 points)"
        >
          <SkipForward size={16} />
          <span>Skip</span>
        </button>

        <button
          className="sec-action-btn gaveup-btn"
          onClick={onGaveUp}
          title="Gave up / Couldn't solve"
        >
          <XCircle size={16} />
          <span>Gave Up</span>
        </button>
      </div>

      <style>{`
        .question-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .question-card.pulse-success {
          transform: scale(1.02);
          border-color: var(--easy-color);
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.4);
        }

        .card-top-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .badge-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .badge-sheet {
          font-size: 0.72rem;
          color: var(--text-muted);
          background: var(--bg-input);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
        }

        .attempts-pill {
          font-size: 0.8rem;
          color: var(--text-secondary);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
        }

        .attempts-count {
          color: var(--amber-main);
          font-family: var(--font-mono);
        }

        .question-center-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          max-width: 750px;
        }

        .question-title-centered {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .open-link-btn {
          padding: 0.6rem 1.25rem;
          font-size: 0.9rem;
          border-color: rgba(59, 130, 246, 0.35);
          color: #60a5fa;
        }

        .open-link-btn:hover {
          background: rgba(59, 130, 246, 0.12);
          border-color: var(--accent-blue);
          color: #93c5fd;
        }

        .primary-action-container {
          width: 100%;
          max-width: 450px;
          display: flex;
          justify-content: center;
        }

        .btn-done-primary {
          width: 100%;
          padding: 1.15rem 2rem;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-done-primary:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.5);
        }

        .btn-done-primary.animating {
          background: #059669;
          transform: scale(1.05);
        }

        .check-anim {
          animation: popCheck 0.3s ease-out;
        }

        @keyframes popCheck {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }

        .secondary-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          width: 100%;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.5rem;
        }

        .sec-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
        }

        .attempt-btn {
          background: var(--bg-input);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }
        .attempt-btn:hover {
          color: var(--amber-main);
          border-color: var(--amber-glow);
          background: var(--bg-card-hover);
        }

        .skip-btn {
          background: var(--bg-input);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }
        .skip-btn:hover {
          color: var(--text-primary);
          background: var(--bg-card-hover);
        }

        .gaveup-btn {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }
        .gaveup-btn:hover {
          background: rgba(239, 68, 68, 0.22);
          border-color: #ef4444;
        }

        @media (max-width: 600px) {
          .question-title-centered {
            font-size: 1.75rem;
          }
          .secondary-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .sec-action-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
