import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import StartSprintModal from './components/StartSprintModal';
import ActiveSprint from './components/ActiveSprint';
import SessionSummary, { inferConfidence } from './components/SessionSummary';
import QuestionBankManager from './components/QuestionBankManager';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';
import VetoRewardsModal from './components/VetoRewardsModal';

import { loadAppState, saveAppState, loadActiveSprintState, saveActiveSprintState } from './utils/storage';
import { buildQuotaQuestionQueue } from './utils/weightedPicker';
import { DEFAULT_SYNC_KEY, pushSyncData, pullSyncData } from './utils/cloudSync';

export default function App() {
  const [appState, setAppState] = useState(() => loadAppState());
  const [activeTab, setActiveTab] = useState('sprint');
  const [isVetoModalOpen, setIsVetoModalOpen] = useState(false);

  // Active Sprint session state (persisted across tab switches and page reloads)
  const [activeSprintState, setActiveSprintState] = useState(() => loadActiveSprintState());

  // Completed Session state (shows summary screen after sprint finishes)
  const [completedSession, setCompletedSession] = useState(null);

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

  const [cloudUnclaimedPoints, setCloudUnclaimedPoints] = useState(null);

  // Total points earned across lifetime sessions
  const totalLifetimePoints = useMemo(() => {
    return (appState.sessions || []).reduce((sum, s) => sum + (s.points || 0), 0);
  }, [appState.sessions]);

  const claimedVetoPoints = appState.claimedVetoPoints || 0;
  const localUnclaimedPoints = Math.max(0, totalLifetimePoints - claimedVetoPoints);
  
  // Use cloudUnclaimedPoints if available and higher than localUnclaimedPoints
  const unclaimedVetoPoints = cloudUnclaimedPoints !== null
    ? Math.max(cloudUnclaimedPoints, localUnclaimedPoints)
    : localUnclaimedPoints;

  const vetoMinutes = Math.floor(unclaimedVetoPoints / 100);
  const syncKey = appState.settings?.syncKey || DEFAULT_SYNC_KEY;

  // Auto-sync Cloud on initial load & key change
  useEffect(() => {
    pullSyncData(syncKey).then(remote => {
      if (remote) {
        if (remote.unclaimedVetoPoints !== undefined) {
          setCloudUnclaimedPoints(remote.unclaimedVetoPoints);
        }
        if (remote.claimedVetoPoints !== undefined && remote.claimedVetoPoints > claimedVetoPoints) {
          setAppState(prev => ({
            ...prev,
            claimedVetoPoints: remote.claimedVetoPoints
          }));
        }
      }
    });
  }, [syncKey]);

  // Handlers for Veto Rewards & Sync
  const handleUpdateSyncKey = (newKey) => {
    setAppState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        syncKey: newKey
      }
    }));
  };

  const handleClaimPoints = (claimedAmt) => {
    const nextClaimed = claimedVetoPoints + claimedAmt;
    setAppState(prev => ({
      ...prev,
      claimedVetoPoints: nextClaimed
    }));
    setCloudUnclaimedPoints(0);

    pushSyncData(syncKey, {
      claimedVetoPoints: nextClaimed,
      totalLifetimePoints,
      unclaimedVetoPoints: 0
    });
  };

  const handleSyncCloud = async () => {
    // If local device has unclaimed points, push first
    if (localUnclaimedPoints > 0) {
      await pushSyncData(syncKey, {
        claimedVetoPoints,
        totalLifetimePoints,
        unclaimedVetoPoints: localUnclaimedPoints
      });
    }
    // Pull remote latest
    const remote = await pullSyncData(syncKey);
    if (remote) {
      if (remote.unclaimedVetoPoints !== undefined) {
        setCloudUnclaimedPoints(remote.unclaimedVetoPoints);
      }
      if (remote.claimedVetoPoints !== undefined && remote.claimedVetoPoints > claimedVetoPoints) {
        setAppState(prev => ({
          ...prev,
          claimedVetoPoints: remote.claimedVetoPoints
        }));
      }
    }
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
        totalSecondsToday += sess.actualDurationSec || sess.durationSec || 0;
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

  // Theme Toggle Handler
  const handleToggleTheme = () => {
    const isDark = appState.settings.theme !== 'light';
    const newTheme = isDark ? 'light' : 'dark-ember';
    document.documentElement.setAttribute('data-theme', newTheme);
    setAppState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        theme: newTheme
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

  // Finish Sprint Handler
  const handleFinishSprint = (finishedSessionData) => {
    // 1. Auto-infer confidence for solved questions if missing
    const processedResults = (finishedSessionData.results || []).map(r => {
      if (r.status === 'done' && !r.confidence) {
        return { ...r, confidence: inferConfidence(r, appState.settings) };
      }
      return r;
    });

    const newSession = {
      id: 'sess_' + Date.now(),
      ...finishedSessionData,
      results: processedResults
    };

    // 2. Update questionStates history (confidence and status)
    const nextQuestionStates = { ...appState.questionStates };
    processedResults.forEach(res => {
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

  // Update Confidence Rating from Summary View
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

    // Update active completedSession if currently displayed
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
      setAppState(loadAppState());
      setActiveSprintState(null);
      setCompletedSession(null);
    }
  };

  const handleSaveSettings = (newSettings) => {
    setAppState(prev => ({
      ...prev,
      settings: newSettings
    }));
  };

  const handleStartAnotherSprint = () => {
    setCompletedSession(null);
    setActiveSprintState(null);
    setActiveTab('sprint');
  };

  return (
    <div className="app-layout">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        todayFocusMinutes={todayStats.minutesFocused}
        vetoMinutes={vetoMinutes}
        onOpenVetoModal={() => setIsVetoModalOpen(true)}
        settings={appState.settings}
        onToggleTheme={handleToggleTheme}
      />

      <VetoRewardsModal
        isOpen={isVetoModalOpen}
        onClose={() => setIsVetoModalOpen(false)}
        unclaimedPoints={unclaimedVetoPoints}
        syncKey={syncKey}
        onUpdateSyncKey={handleUpdateSyncKey}
        onClaimPoints={handleClaimPoints}
        onSyncCloud={handleSyncCloud}
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
            />
          ) : completedSession ? (
            <SessionSummary
              session={completedSession}
              settings={appState.settings}
              onStartNewSprint={handleStartAnotherSprint}
              onGoHome={() => setCompletedSession(null)}
              onUpdateSessionConfidence={handleUpdateSessionConfidence}
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
