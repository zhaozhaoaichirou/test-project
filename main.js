const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;




const server = http.createServer((req, res) => {
    if(req.url!=='/favicon.ico'){
    
        res.end('ok')
    }

});

server.listen(port, hostname,() => {
    console.log('Server running' );
});

console.log('only for test git')


