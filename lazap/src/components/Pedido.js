export let pedido=[]

export const setPedido=(plato,precio,cliente,estado)=>{
    pedido.push({
        cliente:cliente,
        plato:plato,
        precio:precio,
        estado:estado,
    })
    
}



