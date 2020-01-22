AFRAME.registerComponent('delete-item-component', {
    
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            Context_AF.deleteItem();

         
        });
    },
    deleteItem : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        
    }
});