AFRAME.registerComponent('delete-item-component', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.deleteItem();
            
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
    deleteItem : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});