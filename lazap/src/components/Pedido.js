export let pedido=[]

export const setPedido=(plato,precio,cliente)=>{
    pedido.push({
        cliente:cliente,
        plato:plato,
        precio:precio
    })
    
}



