// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    var path = url_parts.pathname;
    switch(path) {
        case '/':
            fs.readFile('./comments.html', function(error, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
            break;
        case '/comments':
            var content = 'Hello';
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(content);
            res.end();
            break;
        default:
            res.writeHead(404);
            res.write('Not found');
            res.end();
            break;
    }
});

server.listen(3000);
console.log('Server is running on port 3000');