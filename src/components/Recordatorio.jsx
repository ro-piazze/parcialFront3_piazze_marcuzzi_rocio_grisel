import React from "react"


const Recordatorio = (props) => {
    return (
      <div className='recordatorio'>
          <h3>Selección anterior: {props.ultimaOpcion.toUpperCase()}</h3>
          <h4>Historial de opciones elegidas:</h4>
          <ul>
            {
              props.historial.map((opcion,index) =>{
                return <li key={index}>{opcion.toUpperCase()}</li>
              })
            }
          </ul>
      </div>
    )
  }
  
  export default Recordatorio