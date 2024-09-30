const http = require('http');
const hostname = '127.0.0.1';
const port = 800;
const server = http.createServer((req, res) => {
    res.setheader('content-type', 'text/plain');
    res.end("Hello world");
});
server.listen(port,hostname,()=>{
    console.log('server runniing at ');
});