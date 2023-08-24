import React from 'react'
import { initializeApp } from "firebase/app";
const Home = () => {

    const consf=process.env.REACT_APP_firebaseConfig
    const app = initializeApp(consf);

    

    
  return (
    <div>Home </div>
  )
}

export default Home