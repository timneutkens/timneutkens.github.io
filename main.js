// Type write titles
Typewriter.start(document.getElementById('heading'), 75, {
  callback: function () {
    var subHeading = document.getElementById('subheading');
    subheading.className = 'show';

    Typewriter.start(subHeading, 50)      
  }
});

// Background effect
document.addEventListener('mousemove' , function (event) {
      var body = document.getElementsByTagName('body')[0];
      var degrees = 90 * event.pageX / screen.width;
      var bg = "background: linear-gradient(" + degrees + "deg,#2196f3,#f44336)";
      body.setAttribute('style', bg);
});
