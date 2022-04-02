import React from "react";

const OpcionBoton = (props) => {
  return (
    <div className="opcion">
      <button className="botones" onClick={() => props.fnClick(props.letra)}>
        {props.letra.toUpperCase()}
      </button>
      <h2>{props.texoOpcion}</h2>
    </div>
  );
};

export default OpcionBoton;
