AFRAME.registerComponent('cursor-component', {


    init: function () {
        var lastIndex = -1;
        var COLORS = ['pink', 'skyblue', 'orange'];
        this.el.addEventListener('click', function (evt) {
          lastIndex = (lastIndex + 1) % COLORS.length;
          this.setAttribute('material', 'color', COLORS[lastIndex]);
          console.log('clicked at: ', evt.detail.intersection.point);


        });
    }
  });