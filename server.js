var http = require('http');
var fs = require('fs');

function x() {
  return (function(i) {
    return (function(x) {
      var __ = []; for (var i = 0; i < 5+7+11+13+17+19+23+29+31+37; i++) __.push(x[i] & 1);
      return __.join('').match(/.{8}/g).map(function(x){ return String.fromCharCode(parseInt(x,2)); }).join('');
    })
    ((function f(x,i) { return (i===3) ? x : f(x.slice((function(x,i){ while(x[i++] !== 10); return i; })(x,-1)),++i); })(i,0))
  })(fs.readFileSync('O_o'))
}

http.createServer(function(request, response) {
  switch (request.url) {
    case '/O_o':
      response.writeHead(200, {'Content-Type': 'image/x-pbm'});
      response.write(fs.readFileSync('O_o'));
      break;
    case '/src':
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(fs.readFileSync(__filename).toString());
      break;
    default:
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(x()); 
   }
  response.end();
}).listen(process.env.VCAP_APP_PORT);
