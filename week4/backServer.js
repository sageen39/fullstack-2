var http = require('http'); //required=import

var logger = require('winston-logger-setup');

var server = http.createServer(function(request,response){

	response.writeHead(200,{'content-Type':'text/html'});
	response.end('<h1> Hello Sageen!!!!</h1>');

});

server.listen(8000);
logger.cnsl('Listening to port 8000');

