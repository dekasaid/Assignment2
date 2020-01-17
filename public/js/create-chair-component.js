AFRAME.registerComponent('create-item-component', {

    init: function()
    {
        console.log('init component');

        const Context_AF = this;

        //entity and element are interchangable
        Context_AF.el.addEventListener('click', function(event)
        {
            console.log('click');
            Context_AF.createItem();       //when you click on the button, an item appears
        });

        Context_AF.el.addEventListener('mouseenter', function(event)
        {
            //el = html entity or element 
            //object3D = three.js(rendering engine) 3D element
           Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event)
        {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);

        });
    },
    createItem: function()
    {
        const Context_AF = this;

       //create entities and set attributes that make it a cow
        let itemChair = document.createElement('a-entity');
        itemChair.setAttribute('class', 'clickable');
        itemChair.setAttribute('obj-model', 'obj:assets/models/Chair_3.obj');
        itemChair.setAttribute('material', 'src:assets/textures/Metal.jpg');
        itemChair.setAttribute('delete-item-component', '');

        //random transfroms
        itemChair.setAttribute('position', {x:(Math.random() * 6.0) -3.0, y:0, z: -4.0 -(Math.random() *3.0)});
        const randScale = 0.2 + (Math.random() * 0.8);
        itemChair.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        itemChair.setAttribute('rotation',{x:0, y:Math.random() * 360.0, z:0});
       
        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(itemChair);
    }

});