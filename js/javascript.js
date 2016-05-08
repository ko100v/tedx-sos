var image = document.querySelector('.team-image');

image.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  image.style['transform-origin'] = x + 'px ' + y + 'px';
});