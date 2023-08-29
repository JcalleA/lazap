import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const FormularioPedido = (props) => {

  const navigate=useNavigate();

  

        const token = async ()=>{
          const url='https://oauth.sandbox.nequi.com/oauth2/token?grant_type=client_credentials';
          const config ={headers: { 
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic MnM1MmVqMzQzODRpc3FwNjJrZDIwZm1nZDI6cjhldmxhMnVrcWJxaWV1am0ycmlqbzd2dm1uNmNkcjY5NnZndDRrZWxoaWRjM2ExNWwz'
        }}

           await axios.post(url,{},config)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

          return (response.data.access_token)
        }
        const nequiMensaje=async () =>{
          let fecha ='01/20';
          let phone='321352541';
          let valor ='32000';
          let url = 'https://api.sandbox.nequi.com/payments/v2/-services-paymentservice-unregisteredpayment'
          let data = JSON.stringify({
            "RequestMessage": {
              "RequestHeader": {
                "Channel": "PNP04-C001",
                "RequestDate": `${fecha}`,
                "MessageID": "123456789016",
                "ClientID": "12345767678",
                "Destination": {
                  "ServiceName": "PaymentsService",
                  "ServiceOperation": "unregisteredPayment",
                  "ServiceRegion": "C001",
                  "ServiceVersion": "1.2.0"
                }
              },
              "RequestBody": {
                "any": {
                  "unregisteredPaymentRQ": {
                    "phoneNumber": `${phone}`,
                    "code": "NIT_1",
                    "value": `${valor}`,
                    "reference1": "reference1",
                    "reference2": "reference2",
                    "reference3": "reference3"
                  }
                }
              }
            }
          });
          
          let config = {
            headers: { 
              'Authorization': `Bearer ${token()}` , 
              'Content-Type': 'application/json'
            },
          };
          await axios.post(url,data,config)
          .then((response) => {
            console.log(response.data);
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