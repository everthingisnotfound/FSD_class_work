const fs = require('fs').promises;
const http = require('http');
const port = 4040;

const server = http.createServer(async (req, res) => {
  if (req.url === '/home' && req.method === 'GET') {
    try {
      const htmlData = await fs.readFile('home.html', { encoding: 'utf-8' });
      const studentData = await fs.readFile('data.json', { encoding: 'utf-8' });
      const students = JSON.parse(studentData);
      let tableHTML = '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; margin-bottom: 20px; width: 100%;">';
      tableHTML += '<thead><tr>';
      Object.keys(students[0]).forEach(key => {
        tableHTML += `<th>${key}</th>`;
      });
      tableHTML += '</tr></thead><tbody>';
      students.forEach(student => {
        tableHTML += '<tr>';
        Object.keys(student).forEach(key => {
          tableHTML += `<td>${student[key]}</td>`;
        });
        tableHTML += '</tr>';
      });
      tableHTML += '</tbody></table>';
      res.setHeader('Content-Type', 'text/html');
      res.write(tableHTML);
      res.write(htmlData);
      res.end();
    } catch (error) {
      res.statusCode = 500;
      res.end('Error reading files');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
