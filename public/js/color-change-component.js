AFRAME.registerComponent('color-change-component', {

//js to change the color state of an object 
    init: function () {
        var lastIndex = -1;
        var COLORS = ['orange', 'grey', 'brown', 'black'];
      
        this.el.addEventListener('click', function (evt) {
          lastIndex = (lastIndex + 1) % COLORS.length;
          this.setAttribute('material', 'color', COLORS[lastIndex]);
          console.log('clicked: ', evt.detail.intersection.point);


        });
    }
  });