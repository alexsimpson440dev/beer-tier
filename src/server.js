var http = require('http');
var fs = require('fs');


// create server
http.createServer(function (req, res) {
    fs.readFile('../public/html/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}).listen('8080');
