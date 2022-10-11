const slider = tns({
    container: '.carousel-wrapper',
    "items": 1,
    "center": true,
    "loop": true,
    "swipeAngle": false,
    "speed": 400,
    "nav": false,
    "controlsContainer": "#carousel-controls",
    "controls": false,
    "responsive": {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1
        }
      }

  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });