var http = require('http');


// create server
http.createServer(function (req, res) {
    res.write("Howdy Y'all!");
    res.end();
}).listen('8080');
