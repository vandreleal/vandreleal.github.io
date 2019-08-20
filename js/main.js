// var elem = document.querySelector('.projects-flkty');
// var flkty = new Flickity( elem, {
//   cellAlign: 'left',
//   freeScroll: true,
//   contain: true,
//   wrapAround: true,
//   pageDots: false
// });

// var gallery = document.querySelector('.gallery-grid');
// var iso;
//
// imagesLoaded(gallery, function() {
//   iso = new Isotope( gallery, {
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     resizable: true,
//     masonry: {
//       // rowHeight: 400,
//       columnWidth: '.grid-sizer',
//       gutter: '.gutter-sizer'
//     }
//   });
// });

var waves = new SineWaves({
  el: document.getElementById('waves'),

  width: function() {
    return window.innerWidth;
  },

  height: function() {
    return 300;
  },

  speed: 0.5,

  rotate: 0,

  ease: 'SineIn',

  wavesWidth: '110%',

  waves: [{
      timeModifier: 1.2,
      lineWidth: 2,
      amplitude: -140,
      wavelength: 100
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: -150,
      wavelength: 100
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: -140,
      wavelength: 120
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: -143,
      wavelength: 160
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: -150,
      wavelength: 140
    }
  ],

  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0, "#333");
    gradient.addColorStop(0.5, "#555");
    gradient.addColorStop(1, "#333");

    var index = -1;
    var length = this.waves.length;
    while (++index < length) {
      this.waves[index].strokeStyle = gradient;
    }

    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});