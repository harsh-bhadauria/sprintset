import React, { useState, useMemo } from 'react';
import { Search, Plus, Upload, Download, RotateCcw, Edit2, Trash2, ExternalLink, Filter, X, ArrowLeft, BookOpen, Layers, ChevronRight, FileText } from 'lucide-react';
import { parseCSV, exportToCSV } from '../utils/csvHandler';

export const getQuestionSheet = (q) => {
  if (q && q.sheet && String(q.sheet).trim() !== '') {
    return String(q.sheet).trim();
  }
  return 'Default';
};

export default function QuestionBankManager({
  questions,
  questionStates,
  onUpdateQuestions,
  onResetToDefault
}) {
  // Navigation State: null (Sheets grid) | 'ALL' (Flat view) | '<sheetName>'
  const [selectedSheetView, setSelectedSheetView] = useState(null);

  // Filter States inside table view
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedDiff, setSelectedDiff] = useState('ALL');

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    topic: 'Arrays & Hashing',
    difficulty: 'Medium',
    sheet: 'Default',
    link: ''
  });

  // Group questions by sheet (with fallback to 'Default')
  const sheetGroups = useMemo(() => {
    const map = new Map();
    questions.forEach(q => {
      const sheetName = getQuestionSheet(q);
      if (!map.has(sheetName)) {
        map.set(sheetName, []);
      }
      map.get(sheetName).push(q);
    });
    return map;
  }, [questions]);

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

  // Scoped questions for the current view
  const scopedQuestions = useMemo(() => {
    if (!selectedSheetView) return [];
    if (selectedSheetView === 'ALL') {
      return questions;
    }
    return questions.filter(q => getQuestionSheet(q) === selectedSheetView);
  }, [questions, selectedSheetView]);

  const allTopics = useMemo(() => {
    const set = new Set(questions.map(q => q.topic || 'General'));
    return Array.from(set).sort();
  }, [questions]);

  // Filtered Questions in table view
  const filteredQuestions = useMemo(() => {
    return scopedQuestions.filter(q => {
      const matchSearch = searchTerm === '' || 
        q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getQuestionSheet(q).toLowerCase().includes(searchTerm.toLowerCase());

      const matchTopic = selectedTopic === 'ALL' || q.topic === selectedTopic;
      const matchDiff = selectedDiff === 'ALL' || q.difficulty === selectedDiff;

      return matchSearch && matchTopic && matchDiff;
    });
  }, [scopedQuestions, searchTerm, selectedTopic, selectedDiff]);

  // Helper stats calculation
  const calcStats = (qList) => {
    const easy = qList.filter(q => q.difficulty === 'Easy').length;
    const medium = qList.filter(q => q.difficulty === 'Medium').length;
    const hard = qList.filter(q => q.difficulty === 'Hard').length;
    const attempted = qList.filter(q => questionStates[q.id]).length;
    return { easy, medium, hard, attempted };
  };

  // CSV Import handler
  const handleCSVImport = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const imported = await parseCSV(file);
      if (imported.length === 0) {
        alert('No valid question rows found in CSV.');
        return;
      }

      // Merge imported questions with existing by ID
      const existingIds = new Set(questions.map(q => q.id));
      const newQuestions = [...questions];
      imported.forEach(q => {
        const normalized = {
          ...q,
          sheet: getQuestionSheet(q)
        };
        if (!existingIds.has(q.id)) {
          newQuestions.push(normalized);
        }
      });

      onUpdateQuestions(newQuestions);
      alert(`Successfully imported ${imported.length} questions!`);
    } catch (err) {
      alert('Error parsing CSV file: ' + err.message);
    }
  };

  const handleOpenAdd = () => {
    setEditingQuestion(null);
    const defaultSheet = (selectedSheetView && selectedSheetView !== 'ALL') ? selectedSheetView : 'Default';
    setFormData({
      id: `custom-${Date.now()}`,
      name: '',
      topic: allTopics[0] || 'Arrays & Hashing',
      difficulty: 'Medium',
      sheet: defaultSheet,
      link: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (question) => {
    setEditingQuestion(question);
    setFormData({
      ...question,
      sheet: getQuestionSheet(question)
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      onUpdateQuestions(questions.filter(q => q.id !== id));
    }
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Question Name is required.');
      return;
    }

    const cleanedFormData = {
      ...formData,
      sheet: (formData.sheet && formData.sheet.trim()) || 'Default'
    };

    if (editingQuestion) {
      onUpdateQuestions(questions.map(q => q.id === editingQuestion.id ? cleanedFormData : q));
    } else {
      onUpdateQuestions([cleanedFormData, ...questions]);
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
              <button className="btn btn-primary" onClick={handleOpenAdd}>
                <Plus size={16} />
                <span>Add Question</span>
              </button>

              <label className="btn btn-secondary cursor-pointer" title="Import CSV File">
                <Upload size={16} />
                <span>Import CSV</span>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVImport}
                  style={{ display: 'none' }}
                />
              </label>

              <button
                className="btn btn-secondary"
                onClick={() => exportToCSV(questions)}
                title="Export Question Bank to CSV"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>

              <button
                className="btn btn-outline btn-reset"
                onClick={() => {
                  if (window.confirm('Reset question bank back to starter set of 85+ questions?')) {
                    onResetToDefault();
                  }
                }}
                title="Reset Question Bank to Defaults"
              >
                <RotateCcw size={16} />
                <span>Reset Bank</span>
              </button>
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
              <button className="btn btn-primary" onClick={handleOpenAdd}>
                <Plus size={16} />
                <span>Add Question</span>
              </button>

              <label className="btn btn-secondary cursor-pointer" title="Import CSV File">
                <Upload size={16} />
                <span>Import CSV</span>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVImport}
                  style={{ display: 'none' }}
                />
              </label>

              <button
                className="btn btn-secondary"
                onClick={() => exportToCSV(questions)}
                title="Export Question Bank to CSV"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>

              <button
                className="btn btn-outline btn-reset"
                onClick={() => {
                  if (window.confirm('Reset question bank back to starter set of 85+ questions?')) {
                    onResetToDefault();
                  }
                }}
                title="Reset Question Bank to Defaults"
              >
                <RotateCcw size={16} />
                <span>Reset Bank</span>
              </button>
            </div>
          </div>

          {/* Filter Controls */}
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
                    <option key={t} value={t}>{t}</option>
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

          {/* Question Table */}
          <div className="table-wrapper">
            <table className="bank-table">
              <thead>
                <tr>
                  <th>Question Name</th>
                  <th>Topic</th>
                  <th>Difficulty</th>
                  <th>Sheet</th>
                  <th>History State</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map(q => {
                    const st = questionStates[q.id];
                    const sheetTag = getQuestionSheet(q);
                    return (
                      <tr key={q.id}>
                        <td className="font-semibold">
                          <div className="q-name-cell">
                            <span>{q.name}</span>
                            {q.link && (
                              <a
                                href={q.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-icon"
                                title="Open LeetCode problem page"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </td>
                        <td><span className="badge badge-topic">{q.topic}</span></td>
                        <td>
                          <span className={`badge badge-${q.difficulty.toLowerCase()}`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td>
                          <button
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
                        </td>
                        <td>
                          {st ? (
                            <div className="history-pill">
                              <span>Times seen: <strong>{st.timesSeen || 0}</strong></span>
                              {st.confidence && (
                                <span className={`conf-chip conf-${st.confidence}`}>
                                  {st.confidence}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-muted text-xs">Never attempted</span>
                          )}
                        </td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="icon-action-btn"
                              onClick={() => handleOpenEdit(q)}
                              title="Edit Question"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              className="icon-action-btn text-danger"
                              onClick={() => handleDelete(q.id)}
                              title="Delete Question"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-muted">
                      No questions match your filter criteria in this view.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingQuestion ? 'Edit Question' : 'Add New Question'}</h3>
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

              <div className="form-row">
                <div className="form-group">
                  <label>Sheet / Collection</label>
                  <input
                    type="text"
                    value={formData.sheet}
                    onChange={(e) => setFormData({ ...formData, sheet: e.target.value })}
                    placeholder="e.g. Striver A2Z"
                    className="input-field-full"
                  />
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
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .btn-reset {
          color: var(--text-muted);
        }
        .btn-reset:hover {
          color: var(--amber-main);
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

        /* Controls & Table */
        .bank-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
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

        .table-wrapper {
          overflow-x: auto;
        }

        .bank-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }

        .bank-table th, .bank-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
        }

        .bank-table th {
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        .q-name-cell {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .link-icon {
          color: var(--accent-blue);
          display: inline-flex;
          align-items: center;
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
        }

        .sheet-tag-btn:hover {
          color: var(--amber-main);
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(249, 115, 22, 0.1);
        }

        .history-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
        }

        .conf-chip {
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          text-transform: capitalize;
          font-size: 0.7rem;
        }

        .conf-shaky { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .conf-ok { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
        .conf-solid { background: rgba(16, 185, 129, 0.15); color: #10b981; }

        .row-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
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

        .modal-card {
          max-width: 540px;
          width: 100%;
          padding: 2rem;
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
