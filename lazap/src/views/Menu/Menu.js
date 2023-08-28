import React from "react";
import './Menu.css';
import { setPedido } from "../../components/Pedido";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/firebase/AuthContext/AuthContext";


const Menu = () => {

  const{user}=UserAuth();
  const navigate=useNavigate();

  const pedir=(plato,precio,cliente)=>{
    setPedido(plato,precio,cliente);
    navigate('/pedidos')
    
  }

  const platillos= {
    nombre:"bandeja paisa",
    precio:20000,
    img:"https://www.196flavors.com/wp-content/uploads/2021/06/bandeja-paisa-2fp.jpg"
  }

  return (
    <div>
      <h1>Hola desde menu</h1>
      <div className="card">
        <h1>{platillos.nombre}</h1>
        <img className="cardImg" src={platillos.img} alt="" />
        <div className="cardFooter">
          <h2>{platillos.precio}</h2>
          <button onClick={()=>{pedir(platillos.nombre,platillos.precio,user.displayName)}}>Pedir</button>
        </div>
      </div>
    </div>
    
  );
};

export default Menu;