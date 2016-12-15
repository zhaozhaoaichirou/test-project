const http = require('http');
//const hostname = '60.205.179.160';
const port = 3000;




const server = http.createServer((req, res) => {
    if(req.url!=='/favicon.ico'){
    
        res.end('ok')
    }

});

server.listen(port, '0.0.0.0',() => {
    console.log('Server running' );
});