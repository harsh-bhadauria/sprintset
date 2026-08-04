import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Search, Plus, Upload, Download, RotateCcw, Edit2, Trash2, 
  Filter, X, ArrowLeft, BookOpen, Layers, 
  ChevronRight, MoreVertical, FolderPlus, RefreshCw, AlertTriangle, FileText, Replace,
  CheckSquare, Square
} from 'lucide-react';
import { parseCSV, exportToCSV } from '../utils/csvHandler';
import { formatTopicName } from './SessionSummary';

export const getQuestionSheets = (q) => {
  if (!q) return ['Default'];
  if (Array.isArray(q.sheets) && q.sheets.length > 0) {
    const valid = q.sheets.map(s => String(s).trim()).filter(Boolean);
    return valid.length > 0 ? valid : ['Default'];
  }
  if (q.sheet && String(q.sheet).trim() !== '') {
    return [String(q.sheet).trim()];
  }
  return ['Default'];
};

export const getQuestionSheet = (q) => {
  return getQuestionSheets(q)[0];
};

export const getQuestionLink = (q) => {
  if (q && q.link && String(q.link).trim() !== '') {
    return String(q.link).trim();
  }
  const query = encodeURIComponent(`${q ? q.name : ''} leetcode`);
  return `https://www.google.com/search?q=${query}`;
};

/**
 * Extract up to maxLen recent outcomes for a question from sessions and questionState.
 * Color-code mapping: solid (green), ok (blue), shaky (amber), gaveUp (red).
 */
export const getRecentQuestionOutcomes = (questionId, sessions = [], questionState = null, maxLen = 5) => {
  const outcomes = [];

  if (Array.isArray(sessions) && sessions.length > 0) {
    sessions.forEach(sess => {
      if (Array.isArray(sess.results)) {
        sess.results.forEach(res => {
          if (res.questionId === questionId) {
            const dateStr = (sess.completedAt || sess.timestamp)
              ? new Date(sess.completedAt || sess.timestamp).toLocaleDateString()
              : '';
            
            let type = 'ok';
            let label = 'OK';

            if (res.confidence === 'solid' || res.confidence === 'tooEasy') {
              type = 'solid';
              label = 'Solid';
            } else if (res.confidence === 'shaky' || res.status === 'skipped') {
              type = 'shaky';
              label = 'Shaky';
            } else if (res.status === 'gaveUp' || res.confidence === 'wrong') {
              type = 'gaveUp';
              label = 'Gave Up';
            } else if (res.confidence === 'ok' || res.status === 'done') {
              type = 'ok';
              label = 'OK';
            }

            outcomes.push({ type, label, date: dateStr });
          }
        });
      }
    });
  }

  // Fallback to single questionState if sessions results had no records
  if (outcomes.length === 0 && questionState) {
    let type = 'ok';
    let label = 'OK';
    const dateStr = questionState.lastAttemptedAt ? new Date(questionState.lastAttemptedAt).toLocaleDateString() : '';

    if (questionState.confidence === 'solid' || questionState.confidence === 'tooEasy') {
      type = 'solid';
      label = 'Solid';
    } else if (questionState.confidence === 'shaky' || questionState.status === 'skipped') {
      type = 'shaky';
      label = 'Shaky';
    } else if (questionState.status === 'gaveUp' || questionState.confidence === 'wrong') {
      type = 'gaveUp';
      label = 'Gave Up';
    } else if (questionState.confidence === 'ok') {
      type = 'ok';
      label = 'OK';
    }

    outcomes.push({ type, label, date: dateStr });
  }

  // Return the last `maxLen` outcomes (most recent on the right)
  return outcomes.slice(-maxLen);
};

/**
 * Merge imported question items into existing bank.
 * Case-insensitive match on question name merges target sheet into existing question's sheets array.
 */
export const mergeImportedQuestions = (existingQuestions, importedItems, targetSheetOverride = null) => {
  const updatedQuestions = [...existingQuestions];

  importedItems.forEach(imported => {
    const importedName = String(imported.name || '').trim().toLowerCase();
    if (!importedName) return;

    const existingIndex = updatedQuestions.findIndex(
      q => String(q.name || '').trim().toLowerCase() === importedName
    );

    const sheetToAdd = targetSheetOverride || (imported.sheets && imported.sheets[0]) || imported.sheet || 'Default';

    if (existingIndex !== -1) {
      // Duplicate match found -> add sheet to existing question's sheets array without duplicates
      const existing = updatedQuestions[existingIndex];
      const currentSheets = getQuestionSheets(existing);
      const newSheets = Array.from(new Set([...currentSheets, sheetToAdd]));

      updatedQuestions[existingIndex] = {
        ...existing,
        sheets: newSheets,
        link: existing.link || imported.link || '',
        topic: existing.topic || imported.topic || 'General'
      };
    } else {
      // New question creation
      const newSheets = targetSheetOverride
        ? [targetSheetOverride]
        : (imported.sheets && imported.sheets.length > 0 ? imported.sheets : [imported.sheet || 'Default']);

      updatedQuestions.push({
        id: imported.id || `q-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        name: String(imported.name).trim(),
        topic: String(imported.topic || 'General').trim(),
        difficulty: imported.difficulty || 'Medium',
        sheets: newSheets,
        link: String(imported.link || '').trim()
      });
    }
  });

  return updatedQuestions;
};

export default function QuestionBankManager({
  questions,
  questionStates = {},
  sessions = [],
  onUpdateQuestions,
  onUpdateQuestionStates,
  onResetToDefault
}) {
  // Navigation State: null (Sheets grid) | 'ALL' (Flat view) | '<sheetName>'
  const [selectedSheetView, setSelectedSheetView] = useState(null);

  // Custom empty sheets list stored in localStorage
  const [customSheets, setCustomSheets] = useState(() => {
    try {
      const saved = localStorage.getItem('sprintset_custom_sheets_v1');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Kebab menu dropdown states
  const [isGlobalMenuOpen, setIsGlobalMenuOpen] = useState(false);
  const [isSheetMenuOpen, setIsSheetMenuOpen] = useState(false);
  const globalMenuRef = useRef(null);
  const sheetMenuRef = useRef(null);

  // Filter States inside table view
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedDiff, setSelectedDiff] = useState('ALL');

  // Modal State for Add Sheet
  const [isAddSheetModalOpen, setIsAddSheetModalOpen] = useState(false);
  const [addSheetNameInput, setAddSheetNameInput] = useState('');
  const [addSheetCSVFile, setAddSheetCSVFile] = useState(null);

  // Modal State for Add / Edit Question
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    topic: 'Arrays & Hashing',
    difficulty: 'Medium',
    sheets: ['Default'],
    link: ''
  });

  const [isCreatingNewSheetInModal, setIsCreatingNewSheetInModal] = useState(false);
  const [newSheetNameInput, setNewSheetNameInput] = useState('');

  // Modal State for Find & Replace
  const [isFindReplaceModalOpen, setIsFindReplaceModalOpen] = useState(false);
  const [findReplaceScope, setFindReplaceScope] = useState('GLOBAL'); // 'GLOBAL' | 'ALL' | '<sheetName>'
  const [findReplaceField, setFindReplaceField] = useState('topic'); // 'topic' | 'sheet' | 'difficulty'
  const [findReplaceOldValue, setFindReplaceOldValue] = useState('');
  const [findReplaceNewValue, setFindReplaceNewValue] = useState('');

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (globalMenuRef.current && !globalMenuRef.current.contains(e.target)) {
        setIsGlobalMenuOpen(false);
      }
      if (sheetMenuRef.current && !sheetMenuRef.current.contains(e.target)) {
        setIsSheetMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Save customSheets to localStorage
  const saveCustomSheets = (sheetsList) => {
    setCustomSheets(sheetsList);
    try {
      localStorage.setItem('sprintset_custom_sheets_v1', JSON.stringify(sheetsList));
    } catch (err) {
      console.error('Error saving custom sheets:', err);
    }
  };

  // Group questions by sheet (multi-sheet membership)
  const sheetGroups = useMemo(() => {
    const map = new Map();

    customSheets.forEach(s => {
      if (s && s.trim() !== '') {
        map.set(s.trim(), []);
      }
    });

    questions.forEach(q => {
      const sheetsList = getQuestionSheets(q);
      sheetsList.forEach(sheetName => {
        if (!map.has(sheetName)) {
          map.set(sheetName, []);
        }
        map.get(sheetName).push(q);
      });
    });
    return map;
  }, [questions, customSheets]);

  // Priority order for sheet cards
  const orderedSheetNames = useMemo(() => {
    const priority = ['Striver A2Z', 'Blind 75', 'NeetCode 150'];
    const allSheets = Array.from(sheetGroups.keys());

    return allSheets.sort((a, b) => {
      const idxA = priority.indexOf(a);
      const idxB = priority.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      if (a === 'Default') return 1;
      if (b === 'Default') return -1;
      return a.localeCompare(b);
    });
  }, [sheetGroups]);

  // Scoped questions for current view
  const scopedQuestions = useMemo(() => {
    if (!selectedSheetView) return [];
    if (selectedSheetView === 'ALL') {
      return questions;
    }
    return questions.filter(q => getQuestionSheets(q).includes(selectedSheetView));
  }, [questions, selectedSheetView]);

  const allTopics = useMemo(() => {
    const set = new Set(questions.map(q => q.topic || 'General'));
    return Array.from(set).sort();
  }, [questions]);

  // Filtered Questions in table view
  const filteredQuestions = useMemo(() => {
    return scopedQuestions.filter(q => {
      const sheetsList = getQuestionSheets(q);
      const matchSearch = searchTerm === '' || 
        q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheetsList.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchTopic = selectedTopic === 'ALL' || q.topic === selectedTopic;
      const matchDiff = selectedDiff === 'ALL' || q.difficulty === selectedDiff;

      return matchSearch && matchTopic && matchDiff;
    });
  }, [scopedQuestions, searchTerm, selectedTopic, selectedDiff]);

  // --- Find & Replace Calculations ---
  const targetQuestionsSet = useMemo(() => {
    if (!findReplaceScope || findReplaceScope === 'GLOBAL' || findReplaceScope === 'ALL') {
      return questions;
    }
    return questions.filter(q => getQuestionSheets(q).includes(findReplaceScope));
  }, [questions, findReplaceScope]);

  const matchingQuestionsCount = useMemo(() => {
    if (!findReplaceOldValue || !findReplaceOldValue.trim()) return 0;
    const oldValLower = findReplaceOldValue.trim().toLowerCase();

    return targetQuestionsSet.filter(q => {
      if (findReplaceField === 'sheet') {
        return getQuestionSheets(q).some(s => s.toLowerCase() === oldValLower);
      }
      const fieldVal = (q[findReplaceField] || '').toString().trim().toLowerCase();
      return fieldVal === oldValLower;
    }).length;
  }, [targetQuestionsSet, findReplaceField, findReplaceOldValue]);

  // Helper stats calculation
  const calcStats = (qList) => {
    const easy = qList.filter(q => q.difficulty === 'Easy').length;
    const medium = qList.filter(q => q.difficulty === 'Medium').length;
    const hard = qList.filter(q => q.difficulty === 'Hard').length;
    const attempted = qList.filter(q => questionStates[q.id]).length;
    return { easy, medium, hard, attempted };
  };

  // --- CSV Import Handlers with Merge on Duplicate ---
  const handleScopedCSVImport = async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedSheetView || selectedSheetView === 'ALL') return;
    try {
      const imported = await parseCSV(file);
      if (imported.length === 0) {
        alert('No valid question rows found in CSV.');
        return;
      }
      
      const mergedQuestions = mergeImportedQuestions(questions, imported, selectedSheetView);

      onUpdateQuestions(mergedQuestions);
      setIsSheetMenuOpen(false);
      alert(`Successfully processed ${imported.length} rows into "${selectedSheetView}"!`);
    } catch (err) {
      alert('Error parsing CSV file: ' + err.message);
    }
  };

  // --- Find & Replace Handlers ---
  const handleOpenFindReplace = (scope) => {
    setFindReplaceScope(scope);
    setFindReplaceField('topic');
    setFindReplaceOldValue('');
    setFindReplaceNewValue('');
    setIsGlobalMenuOpen(false);
    setIsSheetMenuOpen(false);
    setIsFindReplaceModalOpen(true);
  };

  const handleApplyFindReplace = (e) => {
    e.preventDefault();
    if (!findReplaceOldValue.trim() || !findReplaceNewValue.trim()) {
      alert('Please provide both old and new values.');
      return;
    }

    if (matchingQuestionsCount === 0) {
      alert('No matching questions found.');
      return;
    }

    const oldValClean = findReplaceOldValue.trim();
    const newValClean = findReplaceNewValue.trim();
    const scopeText = (!findReplaceScope || findReplaceScope === 'GLOBAL' || findReplaceScope === 'ALL')
      ? 'all questions'
      : `questions in "${findReplaceScope}"`;

    const confirmMsg = `This will update ${matchingQuestionsCount} question${matchingQuestionsCount === 1 ? '' : 's'} (${scopeText}) from '${oldValClean}' to '${newValClean}'.\n\nAre you sure you want to proceed?`;

    if (window.confirm(confirmMsg)) {
      const targetIds = new Set(targetQuestionsSet.map(q => q.id));
      const oldValLower = oldValClean.toLowerCase();

      const updatedQuestions = questions.map(q => {
        if (targetIds.has(q.id)) {
          if (findReplaceField === 'sheet') {
            const currentSheets = getQuestionSheets(q);
            if (currentSheets.some(s => s.toLowerCase() === oldValLower)) {
              const updatedSheets = currentSheets.map(s => s.toLowerCase() === oldValLower ? newValClean : s);
              return { ...q, sheets: Array.from(new Set(updatedSheets)) };
            }
          } else {
            const currentVal = (q[findReplaceField] || '').toString().trim().toLowerCase();
            if (currentVal === oldValLower) {
              return {
                ...q,
                [findReplaceField]: newValClean
              };
            }
          }
        }
        return q;
      });

      onUpdateQuestions(updatedQuestions);
      setIsFindReplaceModalOpen(false);
      alert(`Updated ${matchingQuestionsCount} question${matchingQuestionsCount === 1 ? '' : 's'}.`);
    }
  };

  // --- Add Sheet Flow ---
  const handleOpenAddSheetModal = () => {
    setAddSheetNameInput('');
    setAddSheetCSVFile(null);
    setIsAddSheetModalOpen(true);
  };

  const handleCreateSheetSubmit = async (e) => {
    e.preventDefault();
    if (!addSheetNameInput.trim()) {
      alert('Please enter a sheet name.');
      return;
    }

    const cleanName = addSheetNameInput.trim();
    if (!customSheets.includes(cleanName)) {
      saveCustomSheets([...customSheets, cleanName]);
    }

    if (addSheetCSVFile) {
      try {
        const imported = await parseCSV(addSheetCSVFile);
        if (imported.length > 0) {
          const mergedQuestions = mergeImportedQuestions(questions, imported, cleanName);
          onUpdateQuestions(mergedQuestions);
        }
      } catch (err) {
        alert('Error parsing sheet CSV file: ' + err.message);
      }
    }

    setIsAddSheetModalOpen(false);
    setSelectedSheetView(cleanName);
  };

  // --- Add / Edit Question Flow (Multi-Select Sheets) ---
  const handleOpenAdd = () => {
    setEditingQuestion(null);
    const defaultSheets = (selectedSheetView && selectedSheetView !== 'ALL') ? [selectedSheetView] : ['Default'];
    setFormData({
      id: `custom-${Date.now()}`,
      name: '',
      topic: allTopics[0] || 'Arrays & Hashing',
      difficulty: 'Medium',
      sheets: defaultSheets,
      link: ''
    });
    setIsCreatingNewSheetInModal(false);
    setNewSheetNameInput('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (question) => {
    setEditingQuestion(question);
    setFormData({
      ...question,
      sheets: getQuestionSheets(question)
    });
    setIsCreatingNewSheetInModal(false);
    setNewSheetNameInput('');
    setIsModalOpen(true);
  };

  const toggleSheetMembership = (sheetName) => {
    const current = formData.sheets || [];
    if (current.includes(sheetName)) {
      const next = current.filter(s => s !== sheetName);
      setFormData({ ...formData, sheets: next.length > 0 ? next : ['Default'] });
    } else {
      setFormData({ ...formData, sheets: [...current, sheetName] });
    }
  };

  const handleDeleteQuestion = (id) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      onUpdateQuestions(questions.filter(q => q.id !== id));
    }
  };

  // Delete Sheet: Only delete fully-orphaned questions!
  const handleDeleteSheet = (sheetToDelete) => {
    if (!sheetToDelete || sheetToDelete === 'Default' || sheetToDelete === 'ALL') return;
    const memberQuestions = questions.filter(q => getQuestionSheets(q).includes(sheetToDelete));
    const totalMemberCount = memberQuestions.length;

    const orphanedQuestions = memberQuestions.filter(q => {
      const remaining = getQuestionSheets(q).filter(s => s !== sheetToDelete);
      return remaining.length === 0;
    });

    const orphanedCount = orphanedQuestions.length;

    const confirmMsg = `${totalMemberCount} question${totalMemberCount === 1 ? '' : 's'} will be removed from "${sheetToDelete}"; ${orphanedCount} of those aren't in any other sheet and will be deleted entirely.\n\nAre you sure you want to proceed?`;

    if (window.confirm(confirmMsg)) {
      const orphanedIds = new Set(orphanedQuestions.map(q => q.id));

      const updatedQuestions = questions
        .filter(q => !orphanedIds.has(q.id))
        .map(q => {
          if (getQuestionSheets(q).includes(sheetToDelete)) {
            const remaining = getQuestionSheets(q).filter(s => s !== sheetToDelete);
            return {
              ...q,
              sheets: remaining.length > 0 ? remaining : ['Default']
            };
          }
          return q;
        });

      const nextQuestionStates = { ...questionStates };
      orphanedIds.forEach(id => {
        delete nextQuestionStates[id];
      });

      saveCustomSheets(customSheets.filter(s => s !== sheetToDelete));

      if (onUpdateQuestionStates) {
        onUpdateQuestionStates(nextQuestionStates);
      }
      onUpdateQuestions(updatedQuestions);
      setSelectedSheetView(null);
      setIsSheetMenuOpen(false);
    }
  };

  // Reset Sheet History
  const handleResetSheetHistory = (sheetToReset) => {
    if (!sheetToReset) return;
    const sheetQuestions = sheetToReset === 'ALL' ? questions : (sheetGroups.get(sheetToReset) || []);
    const count = sheetQuestions.length;

    const confirmMsg = `Reset practice history (attempts & confidence) for all ${count} question${count === 1 ? '' : 's'} in "${sheetToReset}"?`;

    if (window.confirm(confirmMsg)) {
      const targetIds = new Set(sheetQuestions.map(q => q.id));
      const nextStates = { ...questionStates };
      targetIds.forEach(id => {
        delete nextStates[id];
      });

      if (onUpdateQuestionStates) {
        onUpdateQuestionStates(nextStates);
      }
      setIsSheetMenuOpen(false);
      alert(`Cleared practice history for "${sheetToReset}".`);
    }
  };

  // Form Save for Single Question
  const handleSaveForm = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Question Name is required.');
      return;
    }

    let finalSheets = [...(formData.sheets || ['Default'])];
    if (isCreatingNewSheetInModal && newSheetNameInput.trim()) {
      const newSheet = newSheetNameInput.trim();
      if (!customSheets.includes(newSheet)) {
        saveCustomSheets([...customSheets, newSheet]);
      }
      if (!finalSheets.includes(newSheet)) {
        finalSheets.push(newSheet);
      }
    }

    const cleanedFormData = {
      ...formData,
      sheets: finalSheets.length > 0 ? finalSheets : ['Default']
    };

    if (editingQuestion) {
      onUpdateQuestions(questions.map(q => q.id === editingQuestion.id ? cleanedFormData : q));
    } else {
      const merged = mergeImportedQuestions(questions, [cleanedFormData]);
      onUpdateQuestions(merged);
    }
    setIsModalOpen(false);
  };

  const handleBackToSheets = () => {
    setSelectedSheetView(null);
    setSearchTerm('');
    setSelectedTopic('ALL');
    setSelectedDiff('ALL');
  };

  const allStats = calcStats(questions);

  return (
    <div className="bank-container glass-card">
      {selectedSheetView === null ? (
        /* PRIMARY VIEW: SHEETS LIST GRID */
        <div className="sheets-overview-view">
          <div className="bank-header">
            <div>
              <h2 className="bank-title">Question Bank ({questions.length})</h2>
              <p className="bank-subtitle">Select a sheet to explore questions, or view all questions in a flat list.</p>
            </div>

            <div className="bank-header-actions">
              {/* Contextual Primary Action on Main Screen: Add Sheet */}
              <button className="btn btn-primary" onClick={handleOpenAddSheetModal}>
                <FolderPlus size={16} />
                <span>Add Sheet</span>
              </button>

              {/* Kebab Dropdown Menu for Global Actions */}
              <div className="kebab-menu-wrapper" ref={globalMenuRef}>
                <button
                  type="button"
                  className="btn btn-secondary kebab-trigger-btn"
                  onClick={() => setIsGlobalMenuOpen(!isGlobalMenuOpen)}
                  title="More Bank Actions"
                >
                  <MoreVertical size={18} />
                </button>

                {isGlobalMenuOpen && (
                  <div className="kebab-dropdown-menu">
                    <button
                      type="button"
                      className="menu-item-btn"
                      onClick={() => {
                        exportToCSV(questions, 'sprintset_all_questions.csv');
                        setIsGlobalMenuOpen(false);
                      }}
                    >
                      <Download size={15} />
                      <span>Export All (CSV)</span>
                    </button>

                    <button
                      type="button"
                      className="menu-item-btn"
                      onClick={() => handleOpenFindReplace('GLOBAL')}
                    >
                      <Replace size={15} />
                      <span>Find & Replace</span>
                    </button>

                    <div className="dropdown-divider" />

                    <button
                      type="button"
                      className="menu-item-btn item-danger"
                      onClick={() => {
                        setIsGlobalMenuOpen(false);
                        if (window.confirm('Reset question bank back to default starter set?')) {
                          onResetToDefault();
                        }
                      }}
                    >
                      <RotateCcw size={15} />
                      <span>Reset Bank</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sheets-grid-section">
            <h3 className="section-grid-title">Problem Sheets & Collections</h3>
            
            <div className="sheet-cards-grid">
              {/* Special All Questions Flat View Card */}
              <div 
                className="sheet-card card-all-questions"
                onClick={() => setSelectedSheetView('ALL')}
              >
                <div className="sheet-card-header">
                  <div className="sheet-icon-badge icon-all-badge">
                    <Layers size={22} />
                  </div>
                  <span className="sheet-type-pill pill-all">Flat View</span>
                </div>

                <div className="sheet-card-body">
                  <h3 className="sheet-card-title">All Questions</h3>
                  <div className="sheet-main-count">{questions.length} <span>Questions</span></div>
                  <div className="sheet-diff-breakdown">
                    <span className="diff-tag tag-easy">{allStats.easy} Easy</span>
                    <span className="dot-sep">•</span>
                    <span className="diff-tag tag-medium">{allStats.medium} Med</span>
                    <span className="dot-sep">•</span>
                    <span className="diff-tag tag-hard">{allStats.hard} Hard</span>
                  </div>
                </div>

                <div className="sheet-card-footer">
                  <span className="view-sheet-btn">
                    View All Questions <ChevronRight size={16} />
                  </span>
                </div>
              </div>

              {/* Sheet Cards for each sheet */}
              {orderedSheetNames.map(sheetName => {
                const sheetQuestions = sheetGroups.get(sheetName) || [];
                const stats = calcStats(sheetQuestions);

                return (
                  <div
                    key={sheetName}
                    className="sheet-card"
                    onClick={() => setSelectedSheetView(sheetName)}
                  >
                    <div className="sheet-card-header">
                      <div className="sheet-icon-badge">
                        <BookOpen size={20} />
                      </div>
                      <span className="sheet-type-pill">Sheet</span>
                    </div>

                    <div className="sheet-card-body">
                      <h3 className="sheet-card-title">{sheetName}</h3>
                      <div className="sheet-main-count">{sheetQuestions.length} <span>Questions</span></div>
                      
                      <div className="sheet-diff-breakdown">
                        <span className="diff-tag tag-easy">{stats.easy} Easy</span>
                        <span className="dot-sep">•</span>
                        <span className="diff-tag tag-medium">{stats.medium} Med</span>
                        <span className="dot-sep">•</span>
                        <span className="diff-tag tag-hard">{stats.hard} Hard</span>
                      </div>
                    </div>

                    <div className="sheet-card-footer">
                      <span className="attempted-indicator">
                        {stats.attempted > 0 ? `${stats.attempted}/${sheetQuestions.length} Attempted` : 'Not started'}
                      </span>
                      <span className="view-sheet-btn">
                        Open Sheet <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* SECONDARY VIEW: QUESTION LIST TABLE FOR A SHEET OR ALL QUESTIONS */
        <div className="sheet-detail-view">
          <div className="bank-header">
            <div className="header-title-with-back">
              <button 
                type="button"
                className="btn-back-sheets" 
                onClick={handleBackToSheets}
                title="Return to Sheets Overview"
              >
                <ArrowLeft size={16} />
                <span>All Sheets</span>
              </button>

              <div>
                <h2 className="bank-title">
                  {selectedSheetView === 'ALL' ? 'All Questions' : selectedSheetView}
                  <span className="header-count-pill">{scopedQuestions.length}</span>
                </h2>
                <p className="bank-subtitle">
                  {selectedSheetView === 'ALL'
                    ? 'Viewing every question across all sheets in your question bank.'
                    : `Viewing questions in the ${selectedSheetView} sheet.`}
                </p>
              </div>
            </div>

            <div className="bank-header-actions">
              {/* Contextual Primary Action inside a Sheet: Add Question */}
              <button className="btn btn-primary" onClick={handleOpenAdd}>
                <Plus size={16} />
                <span>Add Question</span>
              </button>

              {/* Per-Sheet Kebab Actions Menu */}
              <div className="kebab-menu-wrapper" ref={sheetMenuRef}>
                <button
                  type="button"
                  className="btn btn-secondary kebab-trigger-btn"
                  onClick={() => setIsSheetMenuOpen(!isSheetMenuOpen)}
                  title="Sheet Actions"
                >
                  <MoreVertical size={18} />
                </button>

                {isSheetMenuOpen && (
                  <div className="kebab-dropdown-menu">
                    {selectedSheetView === 'ALL' ? (
                      <>
                        <button
                          type="button"
                          className="menu-item-btn"
                          onClick={() => {
                            exportToCSV(questions, 'sprintset_all_questions.csv');
                            setIsSheetMenuOpen(false);
                          }}
                        >
                          <Download size={15} />
                          <span>Export All (CSV)</span>
                        </button>

                        <button
                          type="button"
                          className="menu-item-btn"
                          onClick={() => handleOpenFindReplace('ALL')}
                        >
                          <Replace size={15} />
                          <span>Find & Replace</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <label className="menu-item-btn cursor-pointer">
                          <Upload size={15} />
                          <span>Batch Import</span>
                          <input
                            type="file"
                            accept=".csv"
                            onChange={handleScopedCSVImport}
                            style={{ display: 'none' }}
                          />
                        </label>

                        <button
                          type="button"
                          className="menu-item-btn"
                          onClick={() => {
                            const filename = `sprintset_${selectedSheetView.toLowerCase().replace(/\s+/g, '_')}_questions.csv`;
                            exportToCSV(scopedQuestions, filename);
                            setIsSheetMenuOpen(false);
                          }}
                        >
                          <Download size={15} />
                          <span>Export Sheet</span>
                        </button>

                        <button
                          type="button"
                          className="menu-item-btn"
                          onClick={() => handleOpenFindReplace(selectedSheetView)}
                        >
                          <Replace size={15} />
                          <span>Find & Replace</span>
                        </button>

                        <div className="dropdown-divider" />

                        <button
                          type="button"
                          className="menu-item-btn"
                          onClick={() => handleResetSheetHistory(selectedSheetView)}
                        >
                          <RefreshCw size={15} />
                          <span>Reset History</span>
                        </button>

                        {selectedSheetView !== 'Default' && (
                          <button
                            type="button"
                            className="menu-item-btn item-danger"
                            onClick={() => handleDeleteSheet(selectedSheetView)}
                          >
                            <Trash2 size={15} />
                            <span>Delete Sheet</span>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Filter Controls with vertical margin space */}
          <div className="bank-controls">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={selectedSheetView === 'ALL' ? "Search all questions by name, topic, or sheet..." : `Search in ${selectedSheetView}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="filters-row">
              <div className="select-wrapper">
                <Filter size={14} />
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="filter-select"
                >
                  <option value="ALL">All Topics ({allTopics.length})</option>
                  {allTopics.map(t => (
                    <option key={t} value={t}>{formatTopicName(t)}</option>
                  ))}
                </select>
              </div>

              <div className="select-wrapper">
                <select
                  value={selectedDiff}
                  onChange={(e) => setSelectedDiff(e.target.value)}
                  className="filter-select"
                >
                  <option value="ALL">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </div>

          {/* Question Table (Actions column removed, floating overlay on hover) */}
          <div className="table-wrapper">
            <table className="bank-table">
              <thead>
                <tr>
                  <th className="col-name">Question Name</th>
                  <th className="col-topic">Topic</th>
                  <th className="col-diff">Difficulty</th>
                  
                  {selectedSheetView === 'ALL' ? (
                    <th className="col-sheet">Sheets</th>
                  ) : (
                    <th className="col-history">History</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map(q => {
                    const st = questionStates[q.id];
                    const sheetsList = getQuestionSheets(q);
                    return (
                      <tr key={q.id}>
                        {/* Clickable Question Name Link */}
                        <td className="col-name font-semibold" title={q.name}>
                          <a
                            href={getQuestionLink(q)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="q-name-link"
                            title={q.link ? "Open problem page" : "Search problem on Google"}
                          >
                            {q.name}
                          </a>
                        </td>

                        <td className="col-topic">
                          <span className="badge badge-topic" title={q.topic}>{formatTopicName(q.topic)}</span>
                        </td>

                        <td className="col-diff">
                          <span className={`badge badge-${q.difficulty.toLowerCase()}`}>
                            {q.difficulty}
                          </span>
                        </td>

                        {/* Conditional Column rendering */}
                        {selectedSheetView === 'ALL' ? (
                          <td className="col-sheet">
                            <div className="sheets-tags-wrapper">
                              {sheetsList.map(sheetTag => (
                                <button
                                  key={sheetTag}
                                  type="button"
                                  className="sheet-tag-btn"
                                  onClick={() => {
                                    setSelectedSheetView(sheetTag);
                                    setSearchTerm('');
                                  }}
                                  title={`Filter by ${sheetTag}`}
                                >
                                  {sheetTag}
                                </button>
                              ))}
                            </div>
                          </td>
                        ) : (
                          <td className="col-history">
                            {/* Dot-based Recent Outcomes Display with 5 hollow outline placeholder dots */}
                            {(() => {
                              const maxDots = 5;
                              const recentOutcomes = getRecentQuestionOutcomes(q.id, sessions, st, maxDots);
                              const emptyCount = Math.max(0, maxDots - recentOutcomes.length);

                              const dots = [
                                ...Array(emptyCount).fill({ type: 'empty', label: 'Not attempted', date: '' }),
                                ...recentOutcomes
                              ];

                              const tooltipText = recentOutcomes.length > 0
                                ? `Recent Outcomes (${recentOutcomes.length} attempt${recentOutcomes.length === 1 ? '' : 's'}):\n` +
                                  recentOutcomes.map((h, idx) => `${idx + 1}. ${h.label}${h.date ? ` (${h.date})` : ''}`).join('\n')
                                : 'Never attempted';

                              return (
                                <div className="history-dots-row" title={tooltipText}>
                                  {dots.map((dot, dIdx) => (
                                    <span
                                      key={dIdx}
                                      className={`history-dot dot-${dot.type}`}
                                      title={dot.type !== 'empty' ? `${dot.label}${dot.date ? ` (${dot.date})` : ''}` : 'Never attempted'}
                                    />
                                  ))}
                                </div>
                              );
                            })()}
                          </td>
                        )}

                        {/* Floating Row Actions Overlay (appears right-aligned on hover) */}
                        <div className="row-actions-overlay">
                          <button
                            className="icon-action-btn"
                            onClick={() => handleOpenEdit(q)}
                            title="Edit Question"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            className="icon-action-btn text-danger"
                            onClick={() => handleDeleteQuestion(q.id)}
                            title="Delete Question"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-muted">
                      No questions match your filter criteria in this view.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal 1: Add New Sheet */}
      {isAddSheetModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddSheetModalOpen(false)}>
          <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Create New Sheet</h3>
              <button className="close-btn" onClick={() => setIsAddSheetModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateSheetSubmit} className="form-body">
              <div className="form-group">
                <label>Sheet Name *</label>
                <input
                  type="text"
                  required
                  value={addSheetNameInput}
                  onChange={(e) => setAddSheetNameInput(e.target.value)}
                  placeholder="e.g. LeetCode 75, Core CS, SQL Mastery..."
                  className="input-field-full"
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label>Populate with CSV File (Optional)</label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => setAddSheetCSVFile(e.target.files[0] || null)}
                  className="input-field-full"
                />
                <span className="form-subtext">
                  Upload a CSV file (schema: <code>name, topic, difficulty, link</code>) to populate questions directly into this sheet (merging duplicate question names automatically).
                </span>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsAddSheetModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Sheet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Add / Edit Question (Multi-Select Sheets) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingQuestion ? 'Edit Question' : 'Add Question'}</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="form-body">
              <div className="form-group">
                <label>Question Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Set Matrix Zeroes"
                  className="input-field-full"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Topic</label>
                  <input
                    type="text"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    placeholder="e.g. Arrays & Hashing"
                    className="input-field-full"
                  />
                </div>

                <div className="form-group">
                  <label>Difficulty</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="input-field-full"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Multi-Select Sheets UI */}
              <div className="form-group">
                <label>Sheet Membership (Select all that apply) *</label>
                <div className="sheet-chips-selector">
                  {orderedSheetNames.map(sheetName => {
                    const isSelected = (formData.sheets || []).includes(sheetName);
                    return (
                      <button
                        key={sheetName}
                        type="button"
                        className={`sheet-select-chip ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleSheetMembership(sheetName)}
                      >
                        {isSelected ? <CheckSquare size={14} /> : <Square size={14} />}
                        <span>{sheetName}</span>
                      </button>
                    );
                  })}
                </div>

                {isCreatingNewSheetInModal ? (
                  <div className="form-row mt-2">
                    <input
                      type="text"
                      required
                      value={newSheetNameInput}
                      onChange={(e) => setNewSheetNameInput(e.target.value)}
                      placeholder="Enter new sheet name..."
                      className="input-field-full"
                      autoFocus
                    />
                    <button
                      type="button"
                      className="btn btn-secondary text-xs"
                      onClick={() => setIsCreatingNewSheetInModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn-link-action mt-1"
                    onClick={() => setIsCreatingNewSheetInModal(true)}
                  >
                    + Add to a new sheet...
                  </button>
                )}
              </div>

              <div className="form-group">
                <label>Problem URL / Link</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://leetcode.com/problems/..."
                  className="input-field-full"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 3: Find & Replace Utility */}
      {isFindReplaceModalOpen && (
        <div className="modal-overlay" onClick={() => setIsFindReplaceModalOpen(false)}>
          <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Find & Replace</h3>
              <button className="close-btn" onClick={() => setIsFindReplaceModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleApplyFindReplace} className="form-body">
              <div className="destination-badge-box">
                <span className="text-muted font-semibold">Operating Scope:</span>
                <strong className="text-amber">
                  {(!findReplaceScope || findReplaceScope === 'GLOBAL' || findReplaceScope === 'ALL')
                    ? 'All Questions'
                    : `Sheet "${findReplaceScope}"`}
                </strong>
              </div>

              <div className="form-group">
                <label>Target Field</label>
                <select
                  value={findReplaceField}
                  onChange={(e) => setFindReplaceField(e.target.value)}
                  className="input-field-full"
                >
                  <option value="topic">Topic</option>
                  <option value="sheet">Sheet Name</option>
                  <option value="difficulty">Difficulty</option>
                </select>
              </div>

              <div className="form-group">
                <label>Find (Old Value) *</label>
                <input
                  type="text"
                  required
                  list="existing-field-values"
                  value={findReplaceOldValue}
                  onChange={(e) => setFindReplaceOldValue(e.target.value)}
                  placeholder="e.g. Aray & Hashng"
                  className="input-field-full"
                />
                <datalist id="existing-field-values">
                  {findReplaceField === 'topic' && allTopics.map(t => <option key={t} value={t} />)}
                  {findReplaceField === 'sheet' && orderedSheetNames.map(s => <option key={s} value={s} />)}
                  {findReplaceField === 'difficulty' && ['Easy', 'Medium', 'Hard'].map(d => <option key={d} value={d} />)}
                </datalist>
              </div>

              <div className="form-group">
                <label>Replace With (New Value) *</label>
                <input
                  type="text"
                  required
                  value={findReplaceNewValue}
                  onChange={(e) => setFindReplaceNewValue(e.target.value)}
                  placeholder="e.g. Arrays & Hashing"
                  className="input-field-full"
                />
              </div>

              {/* Match Counter Live Preview */}
              <div className="match-counter-preview">
                <span className="text-muted">Matches Preview:</span>
                <span className={`count-badge ${matchingQuestionsCount > 0 ? 'badge-match-found' : 'badge-match-none'}`}>
                  {matchingQuestionsCount} question{matchingQuestionsCount === 1 ? '' : 's'} matching
                </span>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsFindReplaceModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={matchingQuestionsCount === 0 || !findReplaceOldValue.trim() || !findReplaceNewValue.trim()}
                >
                  Apply Replace
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .bank-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bank-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .header-title-with-back {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-back-sheets {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-back-sheets:hover {
          color: var(--text-primary);
          border-color: var(--amber-main);
          background: var(--bg-card-hover);
        }

        .bank-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .header-count-pill {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background: rgba(249, 115, 22, 0.15);
          color: var(--amber-main);
          border: 1px solid rgba(249, 115, 22, 0.3);
        }

        .bank-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .bank-header-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        /* Kebab Dropdown Menu */
        .kebab-menu-wrapper {
          position: relative;
        }

        .kebab-trigger-btn {
          width: 38px;
          height: 38px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .kebab-dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 6px);
          z-index: 1000;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          padding: 0.4rem;
          min-width: 190px;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          animation: menuFadeIn 0.15s ease;
        }

        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .menu-item-btn {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-sm);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .menu-item-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
        }

        .menu-item-btn.item-danger {
          color: #ef4444;
        }

        .menu-item-btn.item-danger:hover {
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
        }

        .dropdown-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 0.25rem 0;
        }

        /* Sheets Grid View */
        .sheets-grid-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .section-grid-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sheet-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 1.25rem;
        }

        .sheet-card {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.35rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .sheet-card:hover {
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          background: var(--bg-card-hover);
        }

        .card-all-questions {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0.02) 100%);
          border-color: rgba(249, 115, 22, 0.3);
        }

        .card-all-questions:hover {
          border-color: var(--amber-main);
          box-shadow: 0 8px 28px rgba(249, 115, 22, 0.2);
        }

        .sheet-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sheet-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .icon-all-badge {
          background: rgba(249, 115, 22, 0.15);
          border-color: rgba(249, 115, 22, 0.35);
          color: var(--amber-main);
        }

        .sheet-type-pill {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
        }

        .pill-all {
          background: rgba(249, 115, 22, 0.15);
          color: var(--amber-main);
          border-color: rgba(249, 115, 22, 0.3);
        }

        .sheet-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .sheet-card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .sheet-main-count {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .sheet-main-count span {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .sheet-diff-breakdown {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          margin-top: 0.2rem;
        }

        .diff-tag {
          font-weight: 600;
        }

        .tag-easy { color: var(--easy-color); }
        .tag-medium { color: var(--medium-color); }
        .tag-hard { color: var(--hard-color); }

        .sheet-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 0.75rem;
          font-size: 0.8rem;
        }

        .attempted-indicator {
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .view-sheet-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--amber-main);
          font-weight: 700;
          font-size: 0.82rem;
          margin-left: auto;
        }

        /* Controls & Table Spacing */
        .bank-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.6rem 2.2rem 0.6rem 2.4rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          outline: none;
        }

        .search-input:focus {
          border-color: var(--amber-main);
        }

        .clear-search {
          position: absolute;
          right: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          color: var(--text-muted);
        }

        .filters-row {
          display: flex;
          gap: 0.75rem;
        }

        .select-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.4rem 0.75rem;
          font-size: 0.85rem;
        }

        .filter-select {
          background: transparent;
          border: none;
          color: var(--text-primary);
          outline: none;
          font-size: 0.85rem;
        }

        .filter-select option {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        /* Single-Line Row Table Styling */
        .table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .bank-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          background: var(--bg-input);
          table-layout: fixed;
        }

        .bank-table tbody tr {
          position: relative;
        }

        .bank-table th, .bank-table td {
          padding: 0.75rem 0.9rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bank-table th {
          background: var(--bg-card);
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        /* Reclaimed 4-Column Width Allocations */
        .col-name { width: 44%; }
        .col-topic { width: 24%; }
        .col-diff { width: 14%; }
        .col-sheet { width: 18%; }
        .col-history { width: 18%; text-align: center; }
        .bank-table th.col-history, .bank-table td.col-history { text-align: center; }

        .sheets-tags-wrapper {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          overflow-x: auto;
        }

        /* Clickable Question Name Link */
        .q-name-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          max-width: 100%;
          transition: color 0.15s ease;
        }

        .q-name-link:hover {
          color: var(--amber-main);
          text-decoration: underline;
        }

        .sheet-tag-btn {
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.15rem 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          display: inline-block;
        }

        .sheet-tag-btn:hover {
          color: var(--amber-main);
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(249, 115, 22, 0.1);
        }

        /* Dot-based History Outcome Display with hollow outline placeholder dots */
        .history-dots-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          cursor: help;
          padding: 0.2rem 0;
          width: 100%;
        }

        .history-dot {
          width: 8px;
          height: 8px;
          min-width: 8px;
          min-height: 8px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          box-sizing: border-box;
          flex-shrink: 0;
          transition: transform 0.15s ease, opacity 0.15s ease;
          display: inline-block;
        }

        .history-dot:hover {
          transform: scale(1.4);
        }

        .history-dot.dot-empty {
          background: rgba(148, 163, 184, 0.15);
          border: 1.5px solid rgba(148, 163, 184, 0.5);
          box-shadow: none;
        }

        .history-dot.dot-solid {
          background: #10b981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
        }

        .history-dot.dot-ok {
          background: #3b82f6;
          box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
        }

        .history-dot.dot-shaky {
          background: #f59e0b;
          box-shadow: 0 0 6px rgba(245, 158, 11, 0.5);
        }

        .history-dot.dot-gaveUp {
          background: #ef4444;
          box-shadow: 0 0 6px rgba(239, 68, 68, 0.5);
        }

        /* Floating Row Actions Overlay (Hover-revealed over right edge of row) */
        .row-actions-overlay {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.2rem 0.35rem;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.15s ease, visibility 0.15s ease;
          z-index: 10;
        }

        .bank-table tbody tr:hover .row-actions-overlay {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .icon-action-btn {
          background: transparent;
          color: var(--text-muted);
          padding: 0.35rem;
          border-radius: var(--radius-sm);
        }

        .icon-action-btn:hover {
          background: var(--bg-input);
          color: var(--text-primary);
        }

        .icon-action-btn.text-danger:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
        }

        /* Modal & Multi-Select Sheet Chips */
        .modal-card {
          max-width: 540px;
          width: 100%;
          padding: 2rem;
        }

        .sheet-chips-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.75rem;
        }

        .sheet-select-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .sheet-select-chip:hover {
          border-color: rgba(249, 115, 22, 0.4);
          color: var(--text-primary);
        }

        .sheet-select-chip.selected {
          background: rgba(249, 115, 22, 0.15);
          border-color: rgba(249, 115, 22, 0.4);
          color: var(--amber-main);
          font-weight: 700;
        }

        .btn-link-action {
          background: transparent;
          border: none;
          color: var(--amber-main);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          text-align: left;
        }

        .btn-link-action:hover {
          text-decoration: underline;
        }

        .destination-badge-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.25);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .match-counter-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .badge-match-found {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.78rem;
        }

        .badge-match-none {
          background: var(--bg-card);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
        }

        .form-subtext {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
          display: block;
          margin-top: 0.35rem;
        }

        .form-subtext code {
          background: var(--bg-card);
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
          color: var(--amber-main);
        }

        .form-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .input-field-full {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.8rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          outline: none;
        }

        .input-field-full:focus {
          border-color: var(--amber-main);
        }

        .mt-1 { margin-top: 0.25rem; }
        .mt-2 { margin-top: 0.5rem; }
        .text-xs { font-size: 0.75rem; }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .bank-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .header-title-with-back {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
