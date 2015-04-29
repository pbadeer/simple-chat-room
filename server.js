var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function(req, res){
  res.sendfile('index.html');
}).get('/js/script.js', function(req, res){
  res.sendfile('js/script.js');
}).get('/css/styles.css', function(req, res){
  res.sendfile('css/styles.css');
}).get('/css/reset.css', function(req, res){
  res.sendfile('css/reset.css');
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