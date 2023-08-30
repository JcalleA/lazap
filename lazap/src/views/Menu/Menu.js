import React from "react";
import './Menu.css';
import { setPedido } from "../../components/Pedido";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/firebase/AuthContext/AuthContext";


const Menu = () => {

  const{user}=UserAuth();
  const navigate=useNavigate();

  const pedir=(plato,precio,cliente)=>{
    setPedido(plato,precio,cliente,'esperando pago');
    navigate('/formulariopedido')
    
  }

  const platillos= [{
    nombre:"bandeja paisa",
    precio:20000,
    img:"https://www.196flavors.com/wp-content/uploads/2021/06/bandeja-paisa-2fp.jpg"
  },
  {
    nombre:"sancocho gallina",
    precio:8000,
    img:"https://cdn7.kiwilimon.com/brightcove/7752/640x640/7752.jpg.webp"
  }
]

  return (
    <div>
      <h1>Menu Del Dia</h1>
        {platillos.map((e)=>{
          return (
            <div className="card">
            <h1>{e.nombre}</h1>
            <img className="cardImg" src={e.img}></img>
            <div className="cardFooter">
              <h2>{e.precio}</h2>
              <button onClick={()=>{pedir(e.nombre,e.precio,user.displayName)}}>Pedir</button>
            </div>
            </div>
          )
        })}
      </div>
  );
};

export default Menu;