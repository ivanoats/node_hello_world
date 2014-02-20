var http = require('http');

console.log('Creating Server');

var server = http.createServer(function(request, response) {
  'use strict';
  var body = '<h1>hello from IVAN\'s computer</h1>';
  response.writeHead(201, {
    'Content-Length': body.length,
    'Content-Type': 'text/plain'
  });
  response.write();
  response.end();
});

server.listen(3000, function() {
  'use strict';
  console.log('Server Started');
});
