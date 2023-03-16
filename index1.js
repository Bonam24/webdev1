/*var http = require('http');
var port = 3000;

var requestHandler = function(request, response){
    console.log(request.url);
    response.end('Hello from Node server');
}
 var server = http.createServer(requestHandler);
 server.listen(port);
 console.log('Node server started on port 3000');*/
 const express = require('express');
 const app = express();
 const port = 3000;

 app.set('views', 'views');
 app.set('view engine', 'hbs');
 app.use(express.static('public'));
 app.get('/', function(request, response){
    response.render('home', {name:'John Doe'});
 } );

 app.listen(port);
 console.log('Server is listening on port 3000');