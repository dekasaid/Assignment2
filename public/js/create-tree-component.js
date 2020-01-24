
AFRAME.registerComponent('create-tree-component', {

    init: function()
    {
        console.log('init component');

        const Context_AF = this;

        //entity and element are interchangable
        Context_AF.el.addEventListener('click', function(event)
        {
            console.log('click');
            Context_AF.createItem();       //when you hover on the button, a tree appears
           
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
    
    createItem: function()
    {
        const Context_AF = this;

       //create entities and set attributes making up trees
        let itemTree = document.createElement('a-entity');
       
        itemTree.setAttribute('class', 'clickable');
        itemTree.setAttribute('obj-model', 'obj:assets/models/tree-1-fixed-3.obj');
        itemTree.setAttribute('material', 'src:assets/textures/tree1.png');
        itemTree.setAttribute('delete-item-component', {});

        //random transfromations
        itemTree.setAttribute('position', {x:(Math.random() * 4.0) -3.0, y:0, z: -4.0 -(Math.random() *3.0)});
        const randScale = 0.1 + (Math.random() * 0.2);
        itemTree.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        itemTree.setAttribute('rotation',{x:0, y:Math.random() * 360.0, z:0});
      

        //add to a-scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(itemTree);
    },


});