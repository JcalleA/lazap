import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const FormularioPedido = () => {

  const navigate=useNavigate();

  const url='https://oauth.sandbox.nequi.com/oauth2/token?grant_type=client_credentials';
  const config ={headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic MnM1MmVqMzQzODRpc3FwNjJrZDIwZm1nZDI6cjhldmxhMnVrcWJxaWV1am0ycmlqbzd2dm1uNmNkcjY5NnZndDRrZWxoaWRjM2ExNWwz'
        }}

  const pedir = async ()=>{

    const token = await axios.post(url,{},config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(()=>{
    pedir();

  },[])

  
    

  return (
    <div>
      
      </div>
  );
};

export default FormularioPedido;