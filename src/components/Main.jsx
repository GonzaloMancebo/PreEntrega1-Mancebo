import React from "react";
import "../style/Destino.css";

function ItemListContainer (props) {
  return (
    <div className="contenedor-destino">
      <img
        className="imagen-destino"
        src={require(`../Imagen/destino-${props.imagen}.jpg`)}
      />

      <div className="contedor-destino-descripcion">
        <p className="nombre-destino">{props.nombre}</p>
        <p className="nombre-detalle">"{props.detalle}"</p>
      </div>
    </div>
  );
}

export default ItemListContainer;
