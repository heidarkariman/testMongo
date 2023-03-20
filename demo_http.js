const http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello world !!!');
    res.write('<br/>');
    res.write(req.url);
    res.write('<br/>');
    res.end('thats it!!!!');

}).listen(8089);
