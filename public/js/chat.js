// make connection

var socket = io.connect('http://localhost:4000');


// query DOM
 var message = document.getElementById('message');
 var handle = document.getElementById('handle');
 var btn = document.getElementById('btn');
 var output = document.getElementById('output');


// emit events

btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});





// listen for events

socket.on('chat', function(data) {
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
})
