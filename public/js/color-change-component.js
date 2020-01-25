AFRAME.registerComponent('color-change-component', {

    init: function () {
        var lastIndex = -1;
        var COLORS = ['pink', 'skyblue', 'brown', 'black'];
      
        this.el.addEventListener('click', function (evt) {
          lastIndex = (lastIndex + 1) % COLORS.length;
          this.setAttribute('material', 'color', COLORS[lastIndex]);
          console.log('clicked: ', evt.detail.intersection.point);


        });
    }
  });