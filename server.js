var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function(req, res){
  res.sendfile('index.html');
}).get('/script.js', function(req, res){
  res.sendfile('script.js');
}).get('/styles.css', function(req, res){
  res.sendfile('styles.css');
}).get('/reset.css', function(req, res){
  res.sendfile('reset.css');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('message', msg);
    console.log(msg);
  });
});

http.listen(port, function(){
  console.log('listening on http://localhost:' + port);
});