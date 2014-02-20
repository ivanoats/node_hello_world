var http = require('http');
var util = require('util');
var port = 3000;

var server = http.createServer(function(request, response) {
  'use strict';
  console.log(util.inspect(request));
  var body = '' + util.inspect(request.headers);
  response.writeHead(201, {
    'Content-Length': body.length,
    'Content-Type': 'text/plain'
  });
  response.write(body);
  response.end();
});

server.listen(port, function() {
  'use strict';
  console.log('Server Started on http://127.0.0.1:' + port);
});
