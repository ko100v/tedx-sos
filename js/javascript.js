document.addEventListener('readystatechange', function() {
  var image = document.querySelector('.team-image');
  image.addEventListener('mousemove', function(e) {
    requestAnimationFrame(function() {
      var x = e.clientX;
      var y = e.clientY;
      console.log(image);
      image.style['transform-origin'] = x + 'px ' + y + 'px';
    });
  });
});