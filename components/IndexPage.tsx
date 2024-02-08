"use client"
import { useState } from "react";
import Login from "./Login";
//import formStyles from "@/styles/formStyles.module.css" 

const IndexPage=()=>{

    const [showLogin,setShowLogin]=useState(false)
    const [showRegistro,setShowRegistro]=useState(false)

    const handleLoginClick =()=>{
        setShowLogin(true)
    }
    const handleRegistroClick =()=>{
        setShowRegistro(true)
    }
    const handleCloseLogin=()=>{
        setShowLogin(false)
    }
        return(
        <div>
            <center>
            <h1>INICIAR SESION Y REGISTRARSE </h1>
            <br></br>
            <button onClick={handleLoginClick}>Iniciar Sesion</button>
            <br></br>
            <br></br>
            <button onClick={handleRegistroClick}>Registro</button>
            <br></br>
            <br></br>
            {showLogin && <Login onClose={handleCloseLogin}/>}
            </center>
            
        </div>
    )

}
export default IndexPage;
