import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
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
import { pushSupabaseSync, pullSupabaseSync, subscribeToRealtimeSync } from './utils/supabaseClient';

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
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);

  // Total points earned across lifetime sessions
  const totalLifetimePoints = useMemo(() => {
    return (appState.sessions || []).reduce((sum, s) => sum + (s.points || 0), 0);
  }, [appState.sessions]);

  const claimedVetoPoints = appState.claimedVetoPoints || 0;
  const localUnclaimedPoints = Math.max(0, totalLifetimePoints - claimedVetoPoints);
  
  const unclaimedVetoPoints = cloudUnclaimedPoints !== null
    ? Math.max(cloudUnclaimedPoints, localUnclaimedPoints)
    : localUnclaimedPoints;

  const vetoMinutes = Math.floor(unclaimedVetoPoints / 100);
  const syncKey = appState.settings?.syncKey || 'SHADOW-PAW-482';

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success', duration = 3000) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  const getMergedState = (prev, remotePayload) => {
    const nextState = { ...prev };
    
    // 1. Merge Settings using Last-Write-Wins (LWW)
    if (remotePayload.settings) {
      const localTime = prev.settings?.updatedAtMs || 0;
      const remoteTime = remotePayload.settings.updatedAtMs || 0;
      
      if (remoteTime >= localTime || !prev.settings?.updatedAtMs) {
        nextState.settings = { ...prev.settings, ...remotePayload.settings };
      }
    }
    
    // 2. Merge Veto Points
    if (remotePayload.claimedVetoPoints !== undefined && remotePayload.claimedVetoPoints > (prev.claimedVetoPoints || 0)) {
      nextState.claimedVetoPoints = remotePayload.claimedVetoPoints;
    }

    // 3. Merge Sessions (Deduplicate by ID)
    if (remotePayload.sessions && Array.isArray(remotePayload.sessions)) {
      const localSessionIds = new Set((prev.sessions || []).map(s => s.id));
      const missingRemoteSessions = remotePayload.sessions.filter(s => !localSessionIds.has(s.id));
      if (missingRemoteSessions.length > 0) {
        nextState.sessions = [...(prev.sessions || []), ...missingRemoteSessions].sort((a, b) => {
          return new Date(a.startedAt).getTime() - new Date(b.startedAt).getTime();
        });
      }
    }

    // 4. Merge QuestionBank
    if (remotePayload.questionStates) {
      const nextQStates = { ...(prev.questionStates || {}) };
      Object.keys(remotePayload.questionStates).forEach(qId => {
        const remoteQ = remotePayload.questionStates[qId];
        const localQ = nextQStates[qId];
        if (!localQ || (new Date(remoteQ.lastAttemptedAt).getTime() > new Date(localQ.lastAttemptedAt).getTime())) {
          nextQStates[qId] = remoteQ;
        }
      });
      nextState.questionStates = nextQStates;
    }

    // 5. Merge Custom Questions
    if (remotePayload.questions && Array.isArray(remotePayload.questions)) {
      const localQIds = new Set((prev.questions || []).map(q => q.id));
      const missingRemoteQ = remotePayload.questions.filter(q => !localQIds.has(q.id));
      if (missingRemoteQ.length > 0) {
        nextState.questions = [...(prev.questions || []), ...missingRemoteQ];
      }
    }

    return nextState;
  };

  const performSmartMerge = (remotePayload) => {
    if (!remotePayload) return;
    if (remotePayload.unclaimedVetoPoints !== undefined) {
      setCloudUnclaimedPoints(remotePayload.unclaimedVetoPoints);
    }
    setAppState(prev => getMergedState(prev, remotePayload));
  };

  // Initial Supabase Pull & Merge
  useEffect(() => {
    if (!syncKey) return;
    setIsCloudSyncing(true);
    pullSupabaseSync(syncKey).then(remote => {
      if (remote) {
        performSmartMerge(remote);
      }
      setIsCloudSyncing(false);
    });
  }, [syncKey]);

  // Realtime WebSocket Subscription (silent background updates)
  useEffect(() => {
    if (!syncKey) return;
    const unsubscribe = subscribeToRealtimeSync(syncKey, (remotePayload) => {
      performSmartMerge(remotePayload);
    });
    return () => unsubscribe();
  }, [syncKey]);

  const handleSyncCloud = async () => {
    setIsCloudSyncing(true);
    try {
      const remote = await pullSupabaseSync(syncKey);
      let finalStateToPush = appState;
      
      if (remote) {
        finalStateToPush = getMergedState(appState, remote);
        setAppState(finalStateToPush);
      }
      
      const mergedLifetimePoints = (finalStateToPush.sessions || []).reduce((sum, s) => sum + (s.points || 0), 0);
      const mergedClaimed = finalStateToPush.claimedVetoPoints || 0;
      const mergedLocalUnclaimed = Math.max(0, mergedLifetimePoints - mergedClaimed);
      
      let finalUnclaimed = mergedLocalUnclaimed;
      if (remote && remote.unclaimedVetoPoints !== undefined) {
        setCloudUnclaimedPoints(remote.unclaimedVetoPoints);
        finalUnclaimed = Math.max(mergedLocalUnclaimed, remote.unclaimedVetoPoints);
      }
      
      const pushSuccess = await pushSupabaseSync(syncKey, {
        ...finalStateToPush,
        unclaimedVetoPoints: finalUnclaimed
      });

      if (pushSuccess) {
        showToast('Supabase Sync successful!', 'success');
      } else {
        showToast('Supabase Sync failed: check network', 'error');
      }
    } catch (err) {
      showToast('Supabase Sync failed', 'error');
    } finally {
      setIsCloudSyncing(false);
    }
  };

  const handleClaimPoints = (claimedAmt) => {
    const nextClaimed = claimedVetoPoints + claimedAmt;
    setAppState(prev => ({
      ...prev,
      claimedVetoPoints: nextClaimed
    }));
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

  // Finish Sprint Handler
  const handleForceUpload = async () => {
    setIsCloudSyncing(true);
    const lifetimePoints = (appState.sessions || []).reduce((sum, s) => sum + (s.points || 0), 0);
    const claimed = appState.claimedVetoPoints || 0;
    const localUnclaimed = Math.max(0, lifetimePoints - claimed);
    const finalUnclaimed = cloudUnclaimedPoints !== null ? Math.max(cloudUnclaimedPoints, localUnclaimed) : localUnclaimed;
    
    await pushSyncData(syncKey, {
      ...appState,
      unclaimedVetoPoints: finalUnclaimed
    });
    setIsCloudSyncing(false);
    alert('State successfully forced to cloud!');
  };

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
      settings: {
        ...newSettings,
        updatedAtMs: Date.now()
      }
    }));
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

      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        todayFocusMinutes={todayStats.minutesFocused}
        vetoMinutes={vetoMinutes}
        vetoEnabled={Boolean(appState.settings?.vetoEnabled)}
        onOpenVetoModal={() => setIsVetoModalOpen(true)}
        settings={appState.settings}
        onToggleTheme={handleToggleTheme}
        isSyncing={isCloudSyncing}
        onSyncCloud={handleSyncCloud}
        hasActiveSprint={Boolean(activeSprintState)}
      />

      <VetoRewardsModal
        isOpen={isVetoModalOpen}
        onClose={() => setIsVetoModalOpen(false)}
        unclaimedPoints={unclaimedVetoPoints}
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
            onForceUpload={handleForceUpload}
          />
        )}
      </main>
    </div>
  );
}
