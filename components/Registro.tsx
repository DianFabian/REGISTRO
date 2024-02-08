"use client"
import Link from "next/link";
import { useState } from "react";
import formsStyles from "@/styles/formsStyles.module.css"

const Registro=()=>{
    const [nombre,setNombre]=useState('')
    const [email,setEmail]=useState('')
    //email y password son variables vacias 
    const [password,setPassword]=useState('')
    const handledRegistro=()=>{
        console.log(`Login con correo: ${email} y contraseña :${password}`)
    }
    return(
        <center>
            <div className={formsStyles.modal}>
                <div className={formsStyles.modal}>
                    <h2>Registrate </h2>
                    <br></br>
                    <label htmlFor="nombre"> Nombre : </label>
                    <input type="nombre" id="nombre" value={nombre} onChange={(e)=>{
                        //Recarga y borra lo que habia 
                        //la e guarda el valor ingresado
                        e.preventDefault()
                        setNombre(e.target.value)
                    }}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="email"> Correo : </label>
                    <input type="email" id="email" value={email} onChange={(e)=>{
                        //Recarga y borra lo que habia 
                        //la e guarda el valor ingresado
                        e.preventDefault()
                        setEmail(e.target.value)
                    }}/>
                    <br></br>
                    <br></br>
                    <label htmlFor="password"> Contraseña </label>
                    <input type="password" id="password" value={password} onChange={(e)=>{
                        e.preventDefault()
                        setPassword(e.target.value)

                    }}/>
                    <br></br>
                    <button onClick={handledRegistro}>Registrarme</button>
                    <p>¿Ya tienes Cuenta? <Link href="/pages/registro">Inicia Sesion</Link></p>
                    <button onClick={()=>{}}>Cerrar</button>
                </div>
            </div>
        </center>

    )
}
export default Registro;