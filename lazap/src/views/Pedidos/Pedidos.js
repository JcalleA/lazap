import React from "react";
import { pedido } from "../../components/Pedido";
import { UserAuth } from "../../context/firebase/AuthContext/AuthContext";
const Pedidos = () => {

  

    console.log('================pedidos====================');
    console.log(pedido);
    console.log('====================================');


  return (
    <div>
      <h1>Hola desde Pedidos</h1>
      {pedido.map((e)=>{
        return(
          <div className="card">

          <h1>{e.cliente}</h1>

        <h1>{e.plato}</h1>
        
          <h2>{e.precio}</h2>
        
      </div>
        )

        

      })}
      
    </div>
  );
};

export default Pedidos;
