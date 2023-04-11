const http = require('http'); // importamos la libreria http de node
const PORT = 3000; // usamos una constante para el numero del puerto

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello From NODE Server\n')
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
