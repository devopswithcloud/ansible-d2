var http = require('http');
var handleRequest  = function(request, response) {
    response.writeHead(200);
    response.end("Deploying node using Ansible")
}
var www = http.createServer(handleRequest)
www.listen(8080)


