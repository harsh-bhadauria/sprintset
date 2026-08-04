import Papa from 'papaparse';

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
          .filter(row => row.id && row.name)
          .map(row => ({
            id: String(row.id).trim(),
            name: String(row.name || '').trim(),
            topic: String(row.topic || 'General').trim(),
            difficulty: normalizeDifficulty(row.difficulty),
            sheet: (row.sheet && String(row.sheet).trim()) || 'Default',
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
  const csv = Papa.unparse(questions, {
    columns: ['id', 'name', 'topic', 'difficulty', 'sheet', 'link']
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
