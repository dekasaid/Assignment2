AFRAME.registerComponent('create-flower-component', {
//js to create some flowers
    init: function()
    {
        console.log('init component');

        const Context_AF = this;

        //entity and element are interchangable
        Context_AF.el.addEventListener('click', function(event)
        {
            console.log('click');
            Context_AF.createFlower();       //when you hover on the button, a flower appears
           
        });

        Context_AF.el.addEventListener('mouseenter', function(event)
        {
            //el = html entity or element 
            //object3D = three.js(rendering engine) 3D element
          
            
           Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
           //Context_AF.el.object3D.rotate.set();
        });

        Context_AF.el.addEventListener('mouseleave', function(event)
        {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);

        });
    },
    
    createFlower: function()
    {
        const Context_AF = this;

       //create entities and set attributes making up trees
        let itemflower = document.createElement('a-entity');
       
        itemflower.setAttribute('class', 'clickable');
        itemflower.setAttribute('obj-model', 'obj:assets/models/flower.obj');
        itemflower.setAttribute('mtl-model', 'mtl:/assets/models/flower.mtl', 'mtl: #flower-mtl');
        itemflower.setAttribute('delete-item-component', {});

        //random transfromations
        itemflower.setAttribute('position', {x:(Math.random() * 4.0) -3.0, y:0, z: -4.0 -(Math.random() *6.0)});
        const randScale = 0.009;
        itemflower.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        itemflower.setAttribute('rotation',{x:0, y:Math.random() * 360.0, z:0});
      

        //add to a-scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(itemflower);
    },


});