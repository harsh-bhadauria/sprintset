import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, CheckCircle2, RefreshCw, Square, Check, Pause, Play, AlertTriangle, Zap, RotateCcw, Layers, Award, AlertCircle, Flag, Clock } from 'lucide-react';
import { getReplacementQuestion } from '../utils/weightedPicker';

export default function ActiveSprint({
  activeSprintState,
  settings,
  allQuestions = [],
  questionStates = {},
  onUpdateActiveSprintState,
  onFinishSprint
}) {
  const { sessionData, currentIndex = 0, attempts = 0, results = [], questionStartTime = Date.now(), preCountdownDone = false } = activeSprintState || {};
  const { durationSec, queue = [], seed, totalPausedMs = 0, isPaused = false, pauseStartedAtMs = null } = sessionData || {};

  // Pre-sprint 3-2-1 countdown state
  const [preCountdown, setPreCountdown] = useState(preCountdownDone ? 0 : 3);
  const [actualStartMs, setActualStartMs] = useState(sessionData?.startedAtMs || Date.now());

  // 3-2-1 Countdown effect
  useEffect(() => {
    if (preCountdown > 0) {
      const cdTimer = setInterval(() => {
        setPreCountdown(prev => {
          if (prev <= 1) {
            clearInterval(cdTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 750);
      return () => clearInterval(cdTimer);
    } else if (preCountdown === 0 && !preCountdownDone) {
      const now = Date.now();
      setActualStartMs(now);
      onUpdateActiveSprintState({
        ...activeSprintState,
        preCountdownDone: true,
        sessionData: {
          ...sessionData,
          startedAtMs: now
        }
      });
    }
  }, [preCountdown, preCountdownDone]);

  const computeTimeLeft = () => {
    if (preCountdown > 0) return durationSec;
    let elapsedMs = 0;
    const startMs = sessionData?.startedAtMs || actualStartMs;
    if (isPaused && pauseStartedAtMs) {
      elapsedMs = pauseStartedAtMs - startMs - totalPausedMs;
    } else {
      elapsedMs = Date.now() - startMs - totalPausedMs;
    }
    const elapsedSec = Math.floor(elapsedMs / 1000);
    return Math.max(0, durationSec - elapsedSec);
  };

  const [timeLeftSec, setTimeLeftSec] = useState(() => computeTimeLeft());
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);

  // Animation States: 'none' | 'solved' | 'too-easy' | 'gave-up'
  const [animState, setAnimState] = useState('none');

  const [ptsAnimTrigger, setPtsAnimTrigger] = useState(false);
  const [attemptsAnimTrigger, setAttemptsAnimTrigger] = useState(false);

  // Time alert states
  const [showLowTimeWarning, setShowLowTimeWarning] = useState(false);
  const [showTimesUpFlash, setShowTimesUpFlash] = useState(false);
  const [showLowTimeToast, setShowLowTimeToast] = useState(false);
  const lowTimeAlertFired = useRef(false);
  const timesUpFired = useRef(false);

  // Secondary action feedback
  const [wrongAnimTrigger, setWrongAnimTrigger] = useState(false);

  const currentQuestion = queue[currentIndex];

  useEffect(() => {
    if (isPaused || preCountdown > 0) return;

    const timer = setInterval(() => {
      const remain = computeTimeLeft();
      setTimeLeftSec(remain);

      // 5-minute warning
      if (remain <= 300 && remain > 0 && !lowTimeAlertFired.current) {
        lowTimeAlertFired.current = true;
        setShowLowTimeWarning(true);
        setShowLowTimeToast(true);
        // Auto-dismiss toast after 4 seconds
        setTimeout(() => setShowLowTimeToast(false), 4000);
      }

      if (remain <= 0) {
        clearInterval(timer);
        if (!timesUpFired.current) {
          timesUpFired.current = true;
          setShowTimesUpFlash(true);
          // Brief flash then transition to completion
          setTimeout(() => {
            setShowTimesUpFlash(false);
            finishSprintWithResults(results, false); // Timer expiry is NOT early
          }, 1200);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [actualStartMs, sessionData?.startedAtMs, durationSec, totalPausedMs, isPaused, pauseStartedAtMs, preCountdown, results]);

  const handleTogglePause = () => {
    if (isPaused) {
      const pausedDuration = Date.now() - (pauseStartedAtMs || Date.now());
      onUpdateActiveSprintState({
        ...activeSprintState,
        sessionData: {
          ...sessionData,
          isPaused: false,
          pauseStartedAtMs: null,
          totalPausedMs: totalPausedMs + pausedDuration
        }
      });
    } else {
      onUpdateActiveSprintState({
        ...activeSprintState,
        sessionData: {
          ...sessionData,
          isPaused: true,
          pauseStartedAtMs: Date.now()
        }
      });
    }
  };

  const handleIncrementAttempts = () => {
    const nextAttempts = attempts + 1;
    setAttemptsAnimTrigger(true);
    setWrongAnimTrigger(true);
    setTimeout(() => setAttemptsAnimTrigger(false), 400);
    setTimeout(() => setWrongAnimTrigger(false), 500);

    onUpdateActiveSprintState({
      ...activeSprintState,
      attempts: nextAttempts
    });
  };

  const handleTooEasy = () => {
    if (!currentQuestion || animState !== 'none') return;
    setAnimState('too-easy');

    setTimeout(() => {
      setAnimState('none');
      const currentQueueIds = new Set(queue.map(q => q.id));
      const replacement = getReplacementQuestion(
        currentQuestion.difficulty,
        allQuestions,
        currentQueueIds,
        questionStates,
        seed
      );

      if (replacement) {
        const updatedQueue = [...queue];
        updatedQueue[currentIndex] = replacement;
        onUpdateActiveSprintState({
          ...activeSprintState,
          attempts: 0,
          questionStartTime: Date.now(),
          sessionData: {
            ...sessionData,
            queue: updatedQueue
          }
        });
      }
    }, 350);
  };

  const handleDoneClick = () => {
    if (animState !== 'none') return;
    setAnimState('solved');
    setPtsAnimTrigger(true);
    setTimeout(() => setPtsAnimTrigger(false), 400);

    setTimeout(() => {
      setAnimState('none');
      const qStartTime = questionStartTime || Date.now();
      const timeSec = Math.max(1, Math.round((Date.now() - qStartTime) / 1000));
      const newResult = {
        questionId: currentQuestion.id,
        questionName: currentQuestion.name,
        questionLink: currentQuestion.link || '',
        topic: currentQuestion.topic,
        difficulty: currentQuestion.difficulty,
        status: 'done',
        attempts,
        confidence: null,
        timeSec
      };
      recordResultAndAdvance(newResult);
    }, 450);
  };

  const handleGaveUp = () => {
    if (animState !== 'none') return;
    setAnimState('gave-up');

    setTimeout(() => {
      setAnimState('none');
      const qStartTime = questionStartTime || Date.now();
      const timeSec = Math.round((Date.now() - qStartTime) / 1000);
      const newResult = {
        questionId: currentQuestion.id,
        questionName: currentQuestion.name,
        questionLink: currentQuestion.link || '',
        topic: currentQuestion.topic,
        difficulty: currentQuestion.difficulty,
        status: 'gave_up',
        attempts,
        confidence: null,
        timeSec
      };
      recordResultAndAdvance(newResult);
    }, 400);
  };

  const recordResultAndAdvance = (result) => {
    const nextResults = [...results, result];

    if (currentIndex + 1 < queue.length) {
      onUpdateActiveSprintState({
        ...activeSprintState,
        currentIndex: currentIndex + 1,
        attempts: 0,
        results: nextResults,
        questionStartTime: Date.now()
      });
    } else {
      finishSprintWithResults(nextResults);
    }
  };

  const handleCompleteSprint = () => {
    finishSprintWithResults(results, true); // Manual stop = early
  };

  const finishSprintWithResults = (finalResults, isEarly = false) => {
    const totalDurationTaken = durationSec - timeLeftSec;

    let points = 0;
    finalResults.forEach(r => {
      if (r.status === 'done') {
        const pts = settings.pointsByDifficulty[r.difficulty] || 20;
        points += pts;
      }
    });

    const maxPossiblePoints = queue.reduce((sum, q) => {
      return sum + (settings.pointsByDifficulty[q.difficulty] || 20);
    }, 0);

    onFinishSprint({
      seed,
      startedAt: new Date(sessionData?.startedAtMs || actualStartMs).toISOString(),
      durationSec,
      actualDurationSec: totalDurationTaken,
      results: finalResults,
      points,
      maxPossiblePoints,
      totalQuota: queue.length,
      isEndedEarly: isEarly
    });
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Question Link Fallback Helper
  const getQuestionLink = (q) => {
    if (q && q.link && q.link.trim() !== '') {
      return q.link;
    }
    const query = encodeURIComponent(`${q ? q.name : ''} leetcode`);
    return `https://www.google.com/search?q=${query}`;
  };

  const sessionPoints = results.reduce((sum, r) => {
    if (r.status === 'done') {
      return sum + (settings.pointsByDifficulty[r.difficulty] || 20);
    }
    return sum;
  }, 0);

  const questionValue = currentQuestion ? (settings.pointsByDifficulty[currentQuestion.difficulty] || 20) : 0;

  return (
    <div className="active-sprint-container">
      <div className={`unified-sprint-card glass-card ${animState === 'solved' ? 'pulse-success-glow' : ''} ${animState === 'too-easy' ? 'pulse-blue-glow' : ''} ${animState === 'gave-up' ? 'pulse-red-glow' : ''} ${wrongAnimTrigger ? 'pulse-amber-glow' : ''}`}>
        
        {/* PRE-SPRINT 3-2-1 COUNTDOWN OVERLAY WITH HEAVY 28px BLUR */}
        {preCountdown > 0 && (
          <div className="pre-countdown-overlay">
            <div className="pre-countdown-content">
              <span className="pre-countdown-num">{preCountdown}</span>
              <span className="pre-countdown-label">GET READY</span>
            </div>
          </div>
        )}

        {/* Floating Celebratory Badge on Solved */}
        {animState === 'solved' && (
          <div className="floating-action-toast toast-solved">
            <span>+{questionValue} Pts!</span>
          </div>
        )}

        {/* Floating feedback for Wrong Attempt */}
        {wrongAnimTrigger && (
          <div className="floating-action-toast toast-wrong">
            <span>Wrong Attempt</span>
          </div>
        )}

        {/* Floating feedback for Too Easy */}
        {animState === 'too-easy' && (
          <div className="floating-action-toast toast-easy">
            <span>Swapped!</span>
          </div>
        )}

        {/* Floating feedback for Gave Up */}
        {animState === 'gave-up' && (
          <div className="floating-action-toast toast-gaveup">
            <span>Skipped</span>
          </div>
        )}

        {/* Time's Up Flash Overlay */}
        {showTimesUpFlash && (
          <div className="times-up-overlay">
            <div className="times-up-content">
              <Clock size={48} className="times-up-icon" />
              <span className="times-up-text">TIME'S UP</span>
            </div>
          </div>
        )}

        {/* 5-Minute Warning Toast */}
        {showLowTimeToast && (
          <div className="low-time-toast">
            <AlertTriangle size={16} />
            <span>5 minutes remaining!</span>
          </div>
        )}

        {/* Top Control Bar with Persistent Sprint Metrics Top-LEFT */}
        <div className="top-control-bar">
          <div className="top-left-sprint-metrics">
            <div className="sprint-metric-pill" title="Sprint Progress">
              <Layers size={15} className="text-muted" />
              <strong>Q {currentIndex + 1} of {queue.length}</strong>
            </div>

            <div className="sprint-metric-pill pts-pill-styled" title="Session Points Earned">
              <Award size={16} className="text-amber" />
              <strong className={`text-amber ${ptsAnimTrigger ? 'counter-tween-pop' : ''}`}>
                +{sessionPoints} pts
              </strong>
            </div>

            {isPaused && <span className="pause-pill">PAUSED</span>}
          </div>

          <div className="top-icon-controls">
            <button
              className={`icon-btn-ctrl ${isPaused ? 'btn-paused' : ''}`}
              onClick={handleTogglePause}
              title={isPaused ? 'Resume Sprint' : 'Pause Sprint'}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>

            <button
              className="icon-btn-ctrl btn-stop-danger"
              onClick={() => setShowConfirmFinish(true)}
              title="End Sprint Early"
            >
              <Square size={14} />
            </button>
          </div>
        </div>

        {/* ZONE 2: Middle — timer + divider/question/meta group, centered via space-evenly */}
        <div className="sprint-middle-zone">
          {/* Massive Countdown Timer */}
          <div className="ringless-timer-centered">
            <div className={`time-display-massive-focal ${isPaused ? 'timer-paused-blink' : ''} ${showLowTimeWarning && !isPaused ? 'timer-low-time' : ''} ${showTimesUpFlash ? 'timer-times-up' : ''}`}>
              {formatTime(timeLeftSec)}
            </div>
          </div>

          {/* Divider + Question Name + Meta Row — tightly grouped sub-unit */}
          {currentQuestion ? (
            <div className="divider-question-wrapper">
              <hr className="timer-question-divider" />
              <h2 className="unified-question-title">{currentQuestion.name}</h2>
              <div className="per-question-meta-row">
                <a
                  href={getQuestionLink(currentQuestion)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="per-q-pill link-per-q-neutral"
                  title={currentQuestion.link ? 'Open Problem Page' : 'Search Problem on Google'}
                >
                  <ExternalLink size={14} className="text-muted" />
                  <span className="text-secondary font-semibold">Link</span>
                </a>
                <span className="dot-sep">•</span>
                <div className="per-q-pill pts-per-q">
                  <Zap size={14} className="text-amber" />
                  <span>Worth <strong className="text-gold">+{questionValue} pts</strong></span>
                </div>
                <span className="dot-sep">•</span>
                <div className="per-q-pill attempts-per-q">
                  <RotateCcw size={14} className="text-muted" />
                  <span>Attempts: <strong className={`text-primary ${attemptsAnimTrigger ? 'counter-tween-pop' : ''}`}>{attempts + 1}</strong></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state py-8">
              <h3>Sprint Queue Complete!</h3>
              <button className="btn btn-primary mt-4" onClick={handleCompleteSprint}>
                View Sprint Summary
              </button>
            </div>
          )}
        </div>

        {/* ZONE 3: Bottom actions — pinned to bottom via outer space-between */}
        {currentQuestion && (
          <div className="sprint-bottom-actions">
            <div className="primary-done-wrapper">
              <button
                className={`btn-done-primary ${animState === 'solved' ? 'btn-anim-flash' : ''}`}
                onClick={handleDoneClick}
                disabled={animState !== 'none' || isPaused}
              >
                {animState === 'solved' ? (
                  <Check size={36} className="check-anim-scale" />
                ) : (
                  <CheckCircle2 size={26} />
                )}
                <span>{animState === 'solved' ? 'Solved!' : 'Solved'}</span>
              </button>
            </div>
            <div className="secondary-actions-compact-row">
              <button
                className={`compact-sec-btn attempt-btn ${wrongAnimTrigger ? 'btn-flash-amber' : ''}`}
                onClick={handleIncrementAttempts}
                disabled={isPaused}
                title="Record an incorrect submission (+1 attempt)"
              >
                <AlertCircle size={14} />
                <span>+1 Wrong</span>
              </button>
              <button
                className="compact-sec-btn easy-btn"
                onClick={handleTooEasy}
                disabled={isPaused}
                title="Pull a replacement question for this slot"
              >
                <RefreshCw size={14} />
                <span>Too Easy</span>
              </button>
              <button
                className="compact-sec-btn gaveup-btn"
                onClick={handleGaveUp}
                disabled={isPaused}
                title="Gave up / Couldn't solve"
              >
                <Flag size={14} />
                <span>Gave Up</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmFinish && (
        <div className="modal-overlay" onClick={() => setShowConfirmFinish(false)}>
          <div className="modal-card glass-card confirm-modal" onClick={e => e.stopPropagation()}>
            <div className="confirm-header">
              <AlertTriangle size={24} className="text-amber" />
              <h3>End Sprint Early?</h3>
            </div>
            <p className="confirm-desc">
              Your current progress and points earned in this sprint will be saved.
            </p>

            <div className="confirm-actions">
              <button className="btn btn-secondary" onClick={() => setShowConfirmFinish(false)}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleCompleteSprint}>
                End Sprint
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .active-sprint-container {
          max-width: 1100px;
          margin: 1rem auto;
          min-height: calc(100vh - 140px);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .unified-sprint-card {
          flex: 1;
          padding: 2.5rem 2.25rem 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .sprint-middle-zone {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
        }

        .sprint-bottom-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        /* Pre-Sprint 3-2-1 Heavy Blur Overlay */
        .pre-countdown-overlay {
          position: absolute;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-scrim-translucent);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border-radius: var(--radius-lg);
        }

        .pre-countdown-content {
          position: relative;
          z-index: 101;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .pre-countdown-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 7rem;
          color: var(--amber-main);
          line-height: 1;
          animation: popNum 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
        }

        @keyframes popNum {
          0% { transform: scale(0.6); opacity: 0; }
          40% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }

        .pre-countdown-label {
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        /* Micro Feedback Animations */
        .pulse-success-glow {
          border-color: #10b981 !important;
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.4) !important;
        }

        .pulse-blue-glow {
          border-color: #60a5fa !important;
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.3) !important;
        }

        .pulse-red-glow {
          border-color: #ef4444 !important;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.3) !important;
        }

        .pulse-amber-glow {
          border-color: #f59e0b !important;
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3) !important;
        }

        /* Floating Action Toasts */
        .floating-action-toast {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          animation: floatUp 0.45s ease forwards;
          pointer-events: none;
          z-index: 10;
        }

        .toast-solved {
          background: rgba(16, 185, 129, 0.95);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);
          font-size: 1.4rem;
        }

        .toast-wrong {
          background: rgba(245, 158, 11, 0.9);
          box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);
          font-size: 1rem;
        }

        .toast-easy {
          background: rgba(59, 130, 246, 0.9);
          box-shadow: 0 6px 18px rgba(59, 130, 246, 0.4);
          font-size: 1rem;
        }

        .toast-gaveup {
          background: rgba(239, 68, 68, 0.85);
          box-shadow: 0 6px 18px rgba(239, 68, 68, 0.4);
          font-size: 1rem;
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translate(-50%, 0) scale(0.8); }
          50% { opacity: 1; transform: translate(-50%, -20px) scale(1.05); }
          100% { opacity: 0; transform: translate(-50%, -40px) scale(1); }
        }

        /* Button flash states for secondary actions */
        .btn-flash-amber {
          background: rgba(245, 158, 11, 0.15) !important;
          border-color: rgba(245, 158, 11, 0.5) !important;
          color: #f59e0b !important;
        }

        .top-control-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .top-left-sprint-metrics {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sprint-metric-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .pts-pill-styled {
          background: rgba(249, 115, 22, 0.1);
          border-color: rgba(249, 115, 22, 0.3);
        }

        .counter-tween-pop {
          display: inline-block;
          animation: countPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes countPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); color: #10b981; }
          100% { transform: scale(1); }
        }

        .pause-pill {
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid #f59e0b;
          color: #f59e0b;
          font-weight: 700;
          font-size: 0.72rem;
          padding: 0.15rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .top-icon-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon-btn-ctrl {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-paused {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
          border-color: #f59e0b;
        }

        /* Massive Countdown Timer (7.25rem) */
        .ringless-timer-centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        .time-display-massive-focal {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 8rem;
          color: var(--text-primary);
          line-height: 1;
          letter-spacing: -0.05em;
          transition: color 0.2s ease;
        }

        .timer-paused-blink {
          color: var(--amber-main) !important;
          animation: discreteBlink 1.2s steps(1, start) infinite;
        }

        @keyframes discreteBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.2; }
        }

        /* Low time warning — amber pulse */
        .timer-low-time {
          color: #f59e0b !important;
          animation: lowTimePulse 2s ease-in-out infinite;
        }

        @keyframes lowTimePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        /* Time's up — red flash */
        .timer-times-up {
          color: #ef4444 !important;
          animation: timesUpFlash 0.3s ease-in-out infinite;
        }

        @keyframes timesUpFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Time's Up Full-Screen Flash Overlay */
        .times-up-overlay {
          position: absolute;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(239, 68, 68, 0.12);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: var(--radius-lg);
          animation: timesUpOverlayIn 0.3s ease;
        }

        @keyframes timesUpOverlayIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        .times-up-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .times-up-icon {
          color: #ef4444;
          animation: timesUpIconPulse 0.4s ease-in-out infinite alternate;
        }

        @keyframes timesUpIconPulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        .times-up-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 3rem;
          color: #ef4444;
          letter-spacing: 0.15em;
        }

        /* 5-Minute Warning Toast */
        .low-time-toast {
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #f59e0b;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          animation: toastSlideIn 0.35s ease, toastFadeOut 0.5s ease 3.5s forwards;
          pointer-events: none;
        }

        @keyframes toastSlideIn {
          0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes toastFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Dedicated Divider+Question Wrapper */
        .divider-question-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .timer-question-divider {
          width: 100%;
          border: none;
          border-top: 1px solid var(--border-subtle);
          margin: 1rem;
        }

        .unified-question-title {
          font-family: var(--font-heading);
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.15;
          margin: 0;
          padding: 0;
          max-width: 900px;
        }

        /* Unified Per-Question Metadata Row with Neutral Link Pill */
        .per-question-meta-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          margin-top: 0.15rem;
        }

        .per-q-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
        }

        .link-per-q-neutral {
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .link-per-q-neutral:hover {
          color: var(--text-primary);
          text-decoration: underline;
        }

        .dot-sep {
          color: var(--text-muted);
        }

        .primary-done-wrapper {
          width: 100%;
          max-width: 440px;
          margin-top: 2rem;
        }

        .btn-done-primary {
          width: 100%;
          height: 64px;
          padding: 1.1rem 2rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);
          transition: all 0.2s ease;
        }

        .btn-anim-flash {
          transform: scale(1.03);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.6);
        }

        .check-anim-scale {
          animation: popScale 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popScale {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1.2); opacity: 1; }
        }

        .secondary-actions-compact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
        }

        .compact-sec-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        /* Distinct Meaningful Hover State Styling */
        .attempt-btn:hover {
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.4);
          color: #f59e0b;
        }

        .easy-btn:hover {
          background: rgba(59, 130, 246, 0.12);
          border-color: rgba(59, 130, 246, 0.4);
          color: #60a5fa;
        }

        .gaveup-btn:hover {
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        .confirm-modal {
          max-width: 420px;
          padding: 1.75rem;
        }

        .confirm-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .confirm-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        /* Responsive scaling for narrower viewports */
        @media (max-width: 768px) {
          .time-display-massive-focal {
            font-size: 5rem;
          }
          .unified-question-title {
            font-size: 2rem;
          }
          .unified-sprint-card {
            padding: 1.5rem 1.25rem 1.5rem 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .time-display-massive-focal {
            font-size: 3.5rem;
          }
          .unified-question-title {
            font-size: 1.5rem;
          }
          .per-question-meta-row {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
