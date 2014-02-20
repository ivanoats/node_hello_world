var http = require('http');
var util = require('util');
var port = 3000;

var server = http.createServer(function(request, response) {
  'use strict';
  console.log(util.inspect(request));
  var body = '<html><body>\n'
  body += '<pre><code>\n';
  body += 'headers: ' + util.inspect(request.headers);
  body += "\n Method: " + request.method;
  body += "\n Status Code: " + request.statusCode;
  body += "\n url: " + request.url;
  body += '</code></pre>\n</body></html>';

  response.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'text/html'
  });
  response.write(body);
  response.end();
});

server.listen(port, function() {
  'use strict';
  console.log('Server Started on http://127.0.0.1:' + port);
});
