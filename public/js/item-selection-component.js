AFRAME.registerComponent('item-selection-component',{

    //js to click and zoom in on an object 
init: function()
    {
        console.log('init component');

        const Context_AF = this;


        Context_AF.el.addEventListener('mouseenter', function(event)
        {
            //el = html entity or element 
            //object3D = three.js(rendering engine) 3D element
          
            
            Context_AF.el.object3D.scale.set(0.030, 0.030, 0.030);
          
        });

        Context_AF.el.addEventListener('mouseleave', function(event)
        {
           
            Context_AF.el.object3D.scale.set(0.015, 0.015, 0.015)
        });

    }
});