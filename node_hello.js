var http = require('http');

console.log("Creating Server");

var server = http.createServer(function(request, response) {
  response.writeHead(201);
  response.write("<h1>hello from IVAN's computer</h1>");
  response.end();
});

server.listen(3000, function() {
  console.log("Server Started");
});
