// make connection

var socket = io.connect('http://localhost:4000');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



// parameters

var fillStyle = '#000000';
var width = 5;
var height = 5;


// viewmodel

var vm = {
  fillStyle: ko.observable('000000'),
  width: ko.observable(5),
  height: ko.observable(5)
}




// emit events

canvas.addEventListener('click', function(event) {

  console.log(canvas.offsetLeft);


  var data = {
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
    w: vm.width(),
    h: vm.height(),
    c: '#' + vm.fillStyle()
  };




  socket.emit('draw', data);


})





// listen for events

socket.on('draw', function(data) {
  drawPoint(data);
})


function drawPoint(data) {
  ctx.fillStyle = data.c;
  ctx.fillRect(data.x, data.y, data.w, data.h);
}




// init viewmodel
ko.applyBindings(vm);
