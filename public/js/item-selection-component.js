AFRAME.registerComponent('item-selection-component',{

init: function()
    {
        console.log('init component');

        const Context_AF = this;


        Context_AF.el.addEventListener('mouseenter', function(event)
        {
            //el = html entity or element 
            //object3D = three.js(rendering engine) 3D element
          
            
           Context_AF.el.object3D.scale.set(0.025, 0.025, 0.025);
           //Context_AF.el.object3D.rotate.set();
        });

        Context_AF.el.addEventListener('mouseleave', function(event)
        {
            Context_AF.el.object3D.scale.set(0.015, 0.015, 0.015);

        });

    }
});