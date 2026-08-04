import Papa from 'papaparse';

/**
 * Helper to normalize sheets array or legacy sheet string into array
 */
function parseSheetsField(row) {
  if (row.sheets && String(row.sheets).trim() !== '') {
    const list = String(row.sheets).split(';').map(s => s.trim()).filter(Boolean);
    if (list.length > 0) return list;
  }
  if (row.sheet && String(row.sheet).trim() !== '') {
    return [String(row.sheet).trim()];
  }
  return ['Default'];
}

/**
 * Parse CSV content string or File into question objects
 */
export function parseCSV(csvStringOrFile) {
  return new Promise((resolve, reject) => {
    Papa.parse(csvStringOrFile, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false,
      complete: (results) => {
        if (results.errors && results.errors.length > 0) {
          console.warn('CSV Parse Warnings:', results.errors);
        }

        const validQuestions = results.data
          .filter(row => row.name && String(row.name).trim() !== '')
          .map((row, idx) => ({
            id: row.id ? String(row.id).trim() : `q-${Date.now()}-${idx}`,
            name: String(row.name || '').trim(),
            topic: String(row.topic || 'General').trim(),
            difficulty: normalizeDifficulty(row.difficulty),
            sheets: parseSheetsField(row),
            link: String(row.link || '').trim()
          }));

        resolve(validQuestions);
      },
      error: (err) => reject(err)
    });
  });
}

/**
 * Export array of question objects to CSV format string and download
 */
export function exportToCSV(questions, filename = 'questions.csv') {
  const formattedQuestions = questions.map(q => ({
    id: q.id,
    name: q.name,
    topic: q.topic,
    difficulty: q.difficulty,
    sheets: Array.isArray(q.sheets) ? q.sheets.join('; ') : (q.sheet || 'Default'),
    link: q.link || ''
  }));

  const csv = Papa.unparse(formattedQuestions, {
    columns: ['id', 'name', 'topic', 'difficulty', 'sheets', 'link']
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function normalizeDifficulty(diff) {
  if (!diff) return 'Medium';
  const d = String(diff).trim().toLowerCase();
  if (d.includes('easy')) return 'Easy';
  if (d.includes('hard')) return 'Hard';
  return 'Medium';
}
