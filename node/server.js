const http = require('http');
const PORT = 3000;

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello From NODE Server\n')
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
