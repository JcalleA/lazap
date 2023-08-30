import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pedido,setPedido } from "../../components/Pedido";

const FormularioPedido = () => {
  const navigate = useNavigate();
  const [token, setToken] =useState('');
  const [transaccion, setTransaccion] = useState('');
  const [estado,setEstado] = useState('Esperando Pago');
  const [mensaj,setMensaj]=useState('');

  const [telefono, setTelefono] = useState({
    tel: "",
  });
  const actualizar = (e) => {
    let i = e.target.value[telefono.tel.length];
    if (
      i == null ||
      i == 0 ||
      i == 1 ||
      i == 2 ||
      i == 3 ||
      i == 4 ||
      i == 5 ||
      i == 6 ||
      i == 7 ||
      i == 8 ||
      i == 9 ||
      i == 10
    ) {
      setTelefono({
        ...telefono,
        [e.target.name]: e.target.value,
      });
    } else {
      alert("Solo Numeros");
    }
  };

  const getEstado = async () => {
    let fecha = new Date().toISOString();
    let mensaje = Math.floor(Math.random()*(9999999999-1111111111+1)+1);
    let urlMensaje =
      "https://api.sandbox.nequi.com/payments/v2/-services-paymentservice-getstatuspayment";
    let dataMensaje = JSON.stringify({
      RequestMessage: {
        RequestHeader: {
          Channel: "PNP04-C001",
          RequestDate: `${fecha}`,
          MessageID: `${mensaje}`,
          ClientID: `${telefono.tel}`,
          Destination: {
            ServiceName: "PaymentsService",
            ServiceOperation: "getStatusPayment",
            ServiceRegion: "C001",
            ServiceVersion: "1.0.0",
          },
        },
        RequestBody: {
          any: {
            getStatusPaymentRQ: {
              codeQR: `${transaccion}`,
            },
          },
        },
      },
    });

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "x-api-key": "0KzkbbBU0M2QN5fJfc4bB3ws1lXFo2zb5vBr41I5",
      },
    };
     await axios.post(urlMensaje, dataMensaje, config)
     .then(response=>{
      console.log(response)
      let status = response.data.ResponseMessage.ResponseBody.any.getStatusPaymentRS.status
      if(status==null){
        
      }else{
      if(status == 33){
        setEstado('Pendiente')
        setMensaj('Esperando q aceptes el pago')
      }else if(status == 34){
        setEstado('Cancelado o rechazado')
        setMensaj('Pago cancelado')
      }else if(status == 35){
        setEstado('Realizado')
        setMensaj('Pago realizado')
      }else if(status == 69){
        setEstado('Caducada')
        setMensaj('Tiempo gotado')
      }else{
        setEstado('Fallida')
      }
    }
      
      
      
     });
  };

  const nequiMensaje = async () => {
    setMensaj('Enviando mensaje pago ')
    let fecha = new Date().toISOString();
    let valor = pedido[0].precio;
    let mensaje = Math.floor(Math.random()*(9999999999-1111111111+1)+1);
    let urlMensaje =
      "https://api.sandbox.nequi.com/payments/v2/-services-paymentservice-unregisteredpayment";
    let dataMensaje = JSON.stringify({
      RequestMessage: {
        RequestHeader: {
          Channel: "PNP04-C001",
          RequestDate: `${fecha}`,
          MessageID: `${mensaje}`,
          ClientID: `${telefono.tel}`,
          Destination: {
            ServiceName: "PaymentsService",
            ServiceOperation: "unregisteredPayment",
            ServiceRegion: "C001",
            ServiceVersion: "1.2.0",
          },
        },
        RequestBody: {
          any: {
            unregisteredPaymentRQ: {
              phoneNumber: `${telefono.tel}`,
              code: "NIT_1",
              value: `${valor}`,
              reference1: "reference1",
              reference2: "reference2",
              reference3: "reference3",
            },
          },
        },
      },
    });

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "x-api-key": "0KzkbbBU0M2QN5fJfc4bB3ws1lXFo2zb5vBr41I5",
      },
    };
    await axios.post(urlMensaje, dataMensaje, config)
    .then(response=>{
      console.log(response)
      setTransaccion(response.data.ResponseMessage.ResponseBody.any.unregisteredPaymentRS
        .transactionId)
    })
    .catch(error=>{
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    });
    
  };

  const sendToken = async () => {
    setMensaj('Solicitando token...')
    const urlToken =
      "https://oauth.sandbox.nequi.com/oauth2/token?grant_type=client_credentials";
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic MnM1MmVqMzQzODRpc3FwNjJrZDIwZm1nZDI6cjhldmxhMnVrcWJxaWV1am0ycmlqbzd2dm1uNmNkcjY5NnZndDRrZWxoaWRjM2ExNWwz",
      },
    };

    await axios.post(urlToken, {}, config)
    .then(response=>{
      console.log(response)
      setToken(response.data.access_token)
    });
    
    
  };

  const pedir = () => {
    if (telefono.tel.length == 10) {
      sendToken();
    } else {
      alert("Solo numeros telefonicos 10 caracteres");
    }
  };
  useEffect(()=>{
    getEstado()
  },[estado])
  useEffect(()=>{
    getEstado()
  },[transaccion])
  useEffect(()=>{
    nequiMensaje()
  },[token])
  
  return (
    <div>
      <table>
        <thead>
          <td>cliente</td>
          <td>plato</td>
          <td>precio</td>
        </thead>
        {pedido.map((e) => {
          return (
            <tr>
              <td>{e.cliente}</td>
              <td>{e.plato}</td>
              <td>{e.precio}</td>
              <td>{estado}</td>
            </tr>
          );
        })}
      </table>
      <input
        placeholder="telefono"
        name="tel"
        type="tel"
        onChange={actualizar}
      />
      <h1>{telefono.tel}</h1>
      <h2>{mensaj}</h2>
      <button
        onClick={() => {
          pedir();
        }}
      >
        Pagar Nequi
      </button>
    </div>
  );
};

export default FormularioPedido;
