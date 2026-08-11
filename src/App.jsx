import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import StartSprintModal from './components/StartSprintModal';
import ActiveSprint from './components/ActiveSprint';
import SessionSummary, { inferConfidence } from './components/SessionSummary';
import QuestionBankManager from './components/QuestionBankManager';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';
import VetoCouponModal from './components/VetoCouponModal';

import { loadAppState, saveAppState, loadActiveSprintState, saveActiveSprintState } from './utils/storage';
import { buildQuotaQuestionQueue } from './utils/weightedPicker';
import { generateVetoCoupon } from './utils/vetoCrypto';

export default function App() {
  const [appState, setAppState] = useState(() => loadAppState());
  const [activeTab, setActiveTab] = useState('sprint');

  // Active Sprint session state (persisted across tab switches and page reloads)
  const [activeSprintState, setActiveSprintState] = useState(() => loadActiveSprintState());

  // Completed Session state (shows summary screen after sprint finishes)
  const [completedSession, setCompletedSession] = useState(null);

  // Veto Coupon Modal state
  const [vetoModalOpen, setVetoModalOpen] = useState(false);

  // Auto-save appState to localStorage
  useEffect(() => {
    saveAppState(appState);
  }, [appState]);

  // Sync Theme & Palette attributes on <html> element
  useEffect(() => {
    if (appState.settings) {
      if (appState.settings.theme) {
        document.documentElement.setAttribute('data-theme', appState.settings.theme);
      }
      if (appState.settings.palette) {
        document.documentElement.setAttribute('data-palette', appState.settings.palette);
      } else {
        document.documentElement.removeAttribute('data-palette');
      }
    }
  }, [appState.settings]);

  // Auto-save activeSprintState to localStorage
  useEffect(() => {
    saveActiveSprintState(activeSprintState);
  }, [activeSprintState]);

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success', duration = 3000) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  // Calculate today's focus metrics for header pill and analytics overview
  const todayStats = useMemo(() => {
    const todayStr = new Date().toDateString();
    let totalSecondsToday = 0;
    let questionsSolvedToday = 0;
    let pointsEarnedToday = 0;
    let sprintsCountToday = 0;

    (appState.sessions || []).forEach(sess => {
      if (sess.startedAt && new Date(sess.startedAt).toDateString() === todayStr) {
        sprintsCountToday += 1;
        const actualSec = sess.actualDurationSec !== undefined ? sess.actualDurationSec : sess.durationSec;
        totalSecondsToday += actualSec || 0;
        pointsEarnedToday += sess.points || 0;
        (sess.results || []).forEach(r => {
          if (r.status === 'done') questionsSolvedToday += 1;
        });
      }
    });

    return {
      minutesFocused: Math.round(totalSecondsToday / 60),
      sprintsCount: sprintsCountToday,
      questionsSolved: questionsSolvedToday,
      pointsEarned: pointsEarnedToday
    };
  }, [appState.sessions]);

  // Count available Veto coupons
  const vetoRewardCount = useMemo(() => {
    return (appState.sessions || []).filter(s => s.vetoCoupon && s.rewardMinutes > 0).length;
  }, [appState.sessions]);

  // Theme Toggle Handler
  const handleToggleTheme = () => {
    const isDark = appState.settings.theme !== 'light';
    const newTheme = isDark ? 'light' : 'dark-ember';
    document.documentElement.setAttribute('data-theme', newTheme);
    setAppState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        theme: newTheme,
        updatedAtMs: Date.now()
      }
    }));
  };

  // Start Sprint Handler
  const handleStartSprint = (sprintConfig) => {
    const builtQueue = buildQuotaQuestionQueue(
      sprintConfig.matchingQuestions,
      sprintConfig.quota,
      appState.questionStates,
      sprintConfig.seed
    );

    const newActiveSprint = {
      sessionData: {
        ...sprintConfig,
        queue: builtQueue,
        startedAtMs: Date.now(),
        totalPausedMs: 0,
        isPaused: false,
        pauseStartedAtMs: null
      },
      currentIndex: 0,
      attempts: 0,
      results: [],
      questionStartTime: Date.now(),
      preCountdownDone: false
    };

    setCompletedSession(null);
    setActiveSprintState(newActiveSprint);
  };

  // Update Active Sprint Handler (for progress, pause toggles, queue replacements)
  const handleUpdateActiveSprintState = (updatedState) => {
    setActiveSprintState(updatedState);
  };

  const handleFinishSprint = async (finishedSessionData) => {
    // 1. Auto-infer confidence for solved questions if missing
    const processedResults = (finishedSessionData.results || []).map(r => {
      if (r.status === 'done' && !r.confidence) {
        return { ...r, confidence: inferConfidence(r, appState.settings) };
      }
      return r;
    });

    const isVetoActive = Boolean(appState.settings?.vetoEnabled);
    const pointsEarned = finishedSessionData.points || 0;
    const pointsPerMinute = appState.settings?.pointsPerMinute || 100;
    const rewardMinutes = isVetoActive ? Math.floor(pointsEarned / pointsPerMinute) : 0;

    const sessionId = 'sess_' + Date.now();
    const pairingKey = appState.settings?.vetoPairingKey || 'sprintset-veto-secret';

    let vetoCoupon = null;
    if (isVetoActive && rewardMinutes > 0) {
      const payload = {
        sprintId: sessionId,
        minutes: rewardMinutes,
        nonce: window.crypto.randomUUID ? window.crypto.randomUUID() : (Math.random().toString(36).substring(2) + Date.now().toString(36)),
        timestamp: Date.now()
      };
      vetoCoupon = await generateVetoCoupon(pairingKey, payload);
    }

    const newSession = {
      id: sessionId,
      ...finishedSessionData,
      rewardMinutes,
      vetoCoupon,
      results: processedResults
    };

    // 2. Update questionStates history (confidence and status)
    const nextQuestionStates = { ...appState.questionStates };
    processedResults.forEach(res => {
      if (res.status === 'not_reached') return;
      nextQuestionStates[res.questionId] = {
        lastAttemptedAt: new Date().toISOString(),
        status: res.status,
        confidence: res.confidence || nextQuestionStates[res.questionId]?.confidence || null
      };
    });

    setAppState(prev => ({
      ...prev,
      questionStates: nextQuestionStates,
      sessions: [...prev.sessions, newSession]
    }));

    // 3. Clear active sprint state & set completed session summary
    setActiveSprintState(null);
    setCompletedSession(newSession);
  };

  // Update Confidence Rating or Result from Summary View
  const handleUpdateSessionConfidence = (sessionId, questionId, confidence) => {
    setAppState(prev => {
      const updatedSessions = prev.sessions.map(s => {
        if (s.id === sessionId || (!sessionId && s.id === prev.sessions[prev.sessions.length - 1]?.id)) {
          const updatedResults = (s.results || []).map(r => {
            if (r.questionId === questionId) {
              return { ...r, confidence };
            }
            return r;
          });
          return { ...s, results: updatedResults };
        }
        return s;
      });

      const updatedQuestionStates = {
        ...prev.questionStates,
        [questionId]: {
          ...(prev.questionStates[questionId] || {}),
          confidence
        }
      };

      return {
        ...prev,
        questionStates: updatedQuestionStates,
        sessions: updatedSessions
      };
    });

    setCompletedSession(prev => {
      if (!prev) return prev;
      const updatedResults = (prev.results || []).map(r => {
        if (r.questionId === questionId) {
          return { ...r, confidence };
        }
        return r;
      });
      return { ...prev, results: updatedResults };
    });
  };

  const handleUpdateSessionResult = (sessionId, questionId, updates) => {
    setAppState(prev => {
      const isVetoActive = Boolean(prev.settings?.vetoEnabled);
      const updatedSessions = prev.sessions.map(s => {
        if (s.id === sessionId || (!sessionId && s.id === prev.sessions[prev.sessions.length - 1]?.id)) {
          let pointsEarned = s.points || 0;
          let vetoPointsEarned = s.vetoPointsEarned || 0;
          const updatedResults = (s.results || []).map(r => {
            if (r.questionId === questionId) {
              const oldStatus = r.status;
              const newStatus = updates.status || oldStatus;
              if (oldStatus !== 'done' && newStatus === 'done') {
                const addedPts = (prev.settings.pointsByDifficulty[r.difficulty] || 20);
                pointsEarned += addedPts;
                if (isVetoActive) {
                  vetoPointsEarned += addedPts;
                }
              }
              return {
                ...r,
                ...updates,
                status: newStatus,
                isCutoff: false
              };
            }
            return r;
          });
          return { ...s, points: pointsEarned, vetoPointsEarned, results: updatedResults };
        }
        return s;
      });

      const updatedQuestionStates = {
        ...prev.questionStates,
        [questionId]: {
          ...(prev.questionStates[questionId] || {}),
          lastAttemptedAt: new Date().toISOString(),
          status: updates.status,
          confidence: updates.confidence
        }
      };

      return {
        ...prev,
        questionStates: updatedQuestionStates,
        sessions: updatedSessions
      };
    });

    setCompletedSession(prev => {
      if (!prev) return prev;
      let pointsEarned = prev.points || 0;
      let vetoPointsEarned = prev.vetoPointsEarned || 0;
      const isVetoActive = Boolean(appState.settings?.vetoEnabled);
      const updatedResults = (prev.results || []).map(r => {
        if (r.questionId === questionId) {
          const oldStatus = r.status;
          const newStatus = updates.status || oldStatus;
          if (oldStatus !== 'done' && newStatus === 'done') {
            const addedPts = (appState.settings.pointsByDifficulty[r.difficulty] || 20);
            pointsEarned += addedPts;
            if (isVetoActive) {
              vetoPointsEarned += addedPts;
            }
          }
          return {
            ...r,
            ...updates,
            status: newStatus,
            isCutoff: false
          };
        }
        return r;
      });
      return { ...prev, points: pointsEarned, vetoPointsEarned, results: updatedResults };
    });
  };

  // Question Management Handlers
  const handleAddQuestion = (newQuestion) => {
    setAppState(prev => ({
      ...prev,
      questions: [newQuestion, ...prev.questions]
    }));
  };

  const handleEditQuestion = (updatedQuestion) => {
    setAppState(prev => ({
      ...prev,
      questions: prev.questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q)
    }));
  };

  const handleDeleteQuestion = (id) => {
    setAppState(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== id)
    }));
  };

  const handleImportJSON = (importedData) => {
    if (Array.isArray(importedData)) {
      setAppState(prev => ({ ...prev, questions: importedData }));
    } else if (importedData && importedData.questions) {
      setAppState(prev => ({
        ...prev,
        questions: importedData.questions,
        settings: importedData.settings || prev.settings
      }));
    }
  };

  const handleImportCSV = (importedQuestions) => {
    setAppState(prev => ({ ...prev, questions: importedQuestions }));
  };

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all data to defaults? This action cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleSaveSettings = (newSettings) => {
    setAppState(prev => ({
      ...prev,
      settings: {
        ...newSettings,
        updatedAtMs: Date.now()
      }
    }));
  };

  const handleSelectTab = (tabName) => {
    if (activeSprintState?.isCutoffModalOpen && tabName !== 'sprint') {
      showToast('Please respond to the sprint check-in first to complete your sprint!', 'error');
      return;
    }
    setActiveTab(tabName);
  };

  const handleStartAnotherSprint = () => {
    setCompletedSession(null);
    setActiveSprintState(null);
    setActiveTab('sprint');
  };

  return (
    <div className="app-container">
      {/* Floating Global Toast Banner */}
      {toast && (
        <div className={`global-toast-banner toast-${toast.type}`}>
          {toast.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Veto Coupon Modal */}
      <VetoCouponModal
        isOpen={vetoModalOpen}
        onClose={() => setVetoModalOpen(false)}
        sessions={appState.sessions}
        vetoEnabled={appState.settings?.vetoEnabled || false}
      />

      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        todayFocusMinutes={todayStats.minutesFocused}
        settings={appState.settings}
        onToggleTheme={handleToggleTheme}
        hasActiveSprint={Boolean(activeSprintState)}
        isCutoffModalOpen={Boolean(activeSprintState?.isCutoffModalOpen)}
        vetoRewardCount={vetoRewardCount}
        onOpenVetoCoupons={() => setVetoModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="app-main-content">
        {activeTab === 'sprint' && (
          activeSprintState ? (
            <ActiveSprint
              activeSprintState={activeSprintState}
              settings={appState.settings}
              allQuestions={appState.questions}
              questionStates={appState.questionStates}
              onUpdateActiveSprintState={handleUpdateActiveSprintState}
              onFinishSprint={handleFinishSprint}
              onCancelSprint={() => setActiveSprintState(null)}
            />
          ) : completedSession ? (
            <SessionSummary
              session={completedSession}
              settings={appState.settings}
              onStartNewSprint={handleStartAnotherSprint}
              onGoHome={() => setCompletedSession(null)}
              onUpdateSessionConfidence={handleUpdateSessionConfidence}
              onUpdateSessionResult={handleUpdateSessionResult}
            />
          ) : (
            <StartSprintModal
              questions={appState.questions}
              settings={appState.settings}
              onStartSprint={handleStartSprint}
            />
          )
        )}

        {activeTab === 'bank' && (
          <QuestionBankManager
            questions={appState.questions}
            questionStates={appState.questionStates}
            sessions={appState.sessions}
            onUpdateQuestions={(newQuestions) => setAppState(prev => ({ ...prev, questions: newQuestions }))}
            onUpdateQuestionStates={(newStates) => setAppState(prev => ({ ...prev, questionStates: newStates }))}
            onResetToDefault={() => setAppState(prev => ({ ...prev, questions: DEFAULT_QUESTIONS }))}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsView
            sessions={appState.sessions}
            questionStates={appState.questionStates}
            questions={appState.questions}
            todayStats={todayStats}
            settings={appState.settings}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsView
            settings={appState.settings}
            questions={appState.questions}
            sessions={appState.sessions}
            onSaveSettings={handleSaveSettings}
            onImportJSON={handleImportJSON}
            onImportCSV={handleImportCSV}
            onResetData={handleResetData}
          />
        )}
      </main>
    </div>
  );
}
