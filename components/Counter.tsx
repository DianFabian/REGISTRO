
import {useState} from "react"

const Counter =()=> {
    const[counter,setCounter]=useState(0)
    const [showMessage,setShowMessage]=useState(true)
    return(
        <div>
            <center>
                <h1>Contador</h1>
            <p>Haz hecho click {counter} Veces</p>
            <button onClick={()=>{
                setCounter(counter+1)}}>
                Haz click
            </button>
            <br/>
            <br></br>
            <button onClick={()=>{
                setCounter(0)}}>
                Reiniciar Contador
            </button>
            <br/>
            <br></br>
            <button onClick={() =>{
                setShowMessage(!showMessage)
            }}>{!showMessage ? "Mostrar mensaje" : "Ocultar mensaje"}
            </button>

            {
                showMessage &&  <p>!!Hola !!</p>
            
            }

            </center>
            
        </div>
        )
    }

export default Counter;


