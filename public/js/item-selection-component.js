AFRAME.registerComponent('item-selection-component',{

init: function()
    {
        console.log('init component');

        const Context_AF = this;


        Context_AF.el.addEventListener('mouseenter', function(event)
        {
            //el = html entity or element 
            //object3D = three.js(rendering engine) 3D element
          
            
           // Context_AF.el.object3D.scale.set(0.020,0.020,0.020);
           Context_AF.el.object3D.rotation.set(
            THREE.Math.degToRad(15),
            THREE.Math.degToRad(30),
            THREE.Math.degToRad(90)
          );
        });

        Context_AF.el.addEventListener('mouseleave', function(event)
        {
            Context_AF.el.object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(90)
            );

        });

    }
});