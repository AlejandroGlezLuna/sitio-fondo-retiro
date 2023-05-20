import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/tarjeta.css'

function CompConsejos(props) {
  const { backgroundImage } = props;

  const styles = {
      backgroundImage: `url(${backgroundImage})`
  };
    return (
        <>
        <div className="contenedor-tarjeta">
            <div className="texto-tarjeta">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="imagen-tarjeta" src={props.image} style={styles}>
            </div>
        </div>
        <Outlet/>
        </>
    );
}

export default CompConsejos;
