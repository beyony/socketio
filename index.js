var express = require('express');
var socket = require('socket.io');


var app = express();

app.use(express.static('public'));


var server = app.listen(4000, function(){
  console.log("Server running on 4000...");
})


var io = socket(server);

var sockets = [];

io.on('connection', function(socket) {
  console.log("made socket connection");
  sockets.push(socket);
  console.log(socket.id);


  socket.on('chat', function(data) {
    console.log(data);

    for (var i = 0; i < sockets.length; i++) {
      sockets[i].emit('chat', data);
    }

    //socket.emit('chat', data);
  });

});
