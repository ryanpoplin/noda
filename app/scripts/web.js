// The HTTP module is included by the 'require' function...
// variable 'http' is a reference to this HTTP module...
var http = require("http");

// Parameters: a ServerRequest object & a ServerResponse object...
function processRequest(req, res) {
    var body = 'Poplin is trying to learn Node.js...',
    	contentLength = body.length;
    res.writeHead(200, {
            'Content-Length': contentLength,
                'Content-Type': 'text/plain'
    });
    res.end(body);
}

// The 'createServer' function takes a 'function' as its parameter...
// It's the function that will invoke when the connection to this server is successful...
var server = http.createServer(processRequest);

// The 'port' the server is listening to for requests...
server.listen(8080);