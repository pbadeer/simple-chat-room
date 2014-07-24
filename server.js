var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
  	console.log(msg);
    io.emit('message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on http://localhost:' + port);
});