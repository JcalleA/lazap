import React from "react";
import { pedido } from "../../components/Pedido";

const Pedidos = () => {

  return (
    <div>
      <h1>Lista De Pedidos</h1>
      <table>
        <thead>
                <td>cliente</td>
                <td>plato</td>
                <td>precio</td>
              </thead>
      {pedido.map((e)=>{
        return(
              <tr>
                <td>{e.cliente}</td>
                <td>{e.plato}</td>
                <td>{e.precio}</td>
              </tr>
        )
      })}
      </table>
    </div>
  );
};

export default Pedidos;
