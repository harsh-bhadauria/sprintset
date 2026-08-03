import React, { useState, useMemo } from 'react';
import { Search, Plus, Upload, Download, RotateCcw, Edit2, Trash2, ExternalLink, Filter, X } from 'lucide-react';
import { parseCSV, exportToCSV } from '../utils/csvHandler';
import { DEFAULT_QUESTIONS } from '../data/starterQuestions';

export default function QuestionBankManager({
  questions,
  questionStates,
  onUpdateQuestions,
  onResetToDefault
}) {
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
    sheet: 'Custom',
    link: ''
  });

  const allTopics = useMemo(() => {
    const set = new Set(questions.map(q => q.topic || 'General'));
    return Array.from(set).sort();
  }, [questions]);

  // Filtered List
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchSearch = searchTerm === '' || 
        q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (q.sheet && q.sheet.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchTopic = selectedTopic === 'ALL' || q.topic === selectedTopic;
      const matchDiff = selectedDiff === 'ALL' || q.difficulty === selectedDiff;

      return matchSearch && matchTopic && matchDiff;
    });
  }, [questions, searchTerm, selectedTopic, selectedDiff]);

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
        if (!existingIds.has(q.id)) {
          newQuestions.push(q);
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
    setFormData({
      id: `custom-${Date.now()}`,
      name: '',
      topic: allTopics[0] || 'Arrays & Hashing',
      difficulty: 'Medium',
      sheet: 'Custom',
      link: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (question) => {
    setEditingQuestion(question);
    setFormData({ ...question });
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

    if (editingQuestion) {
      // Update existing
      onUpdateQuestions(questions.map(q => q.id === editingQuestion.id ? formData : q));
    } else {
      // Add new
      onUpdateQuestions([formData, ...questions]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bank-container glass-card">
      {/* Top Header & Actions */}
      <div className="bank-header">
        <div>
          <h2 className="bank-title">Question Bank ({questions.length})</h2>
          <p className="bank-subtitle">Manage, edit, or import custom CSV question pools.</p>
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
            placeholder="Search questions by name, topic, or sheet..."
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
                    <td><span className="sheet-tag">{q.sheet || 'Custom'}</span></td>
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
                  No questions match your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

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
                  <label>Sheet / Source</label>
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

        .bank-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
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

        .sheet-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
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
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
