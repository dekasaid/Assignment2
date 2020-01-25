AFRAME.registerComponent('color2-change-component', {
  
    //js to change the color state of an object 
        init: function () {
            var lastIndex = -1;
            var COLORS = ['yellow', 'green', 'blue', 'black'];
          
            this.el.addEventListener('click', function (evt) {
              lastIndex = (lastIndex + 1) % COLORS.length;
              this.setAttribute('material', 'color', COLORS[lastIndex]);
              console.log('clicked: ', evt.detail.intersection.point);
    
    
            });
        }
      });