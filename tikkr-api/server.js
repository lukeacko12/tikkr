const http = require('http');
const app = require('./app');

const port = 4000;

const server = http.createServer(app);

server.listen(port);

console.log('Tikkr API server started on ' + port);