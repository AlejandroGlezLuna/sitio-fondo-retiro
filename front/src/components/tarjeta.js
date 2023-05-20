import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/tarjeta.css'

function CompTarjeta(props) {
  const { backgroundImage } = props;

  const styles = {
      backgroundImage: `url(${backgroundImage})`
  };
    return (
        <>
        <div className="contenedor-tarjeta">
            <div className="texto-tarjeta">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <button className="boton-tarjeta"><Link to={props.to} className="link-tarjeta">{props.buttonText}</Link></button>
            </div>
            <div className="imagen-tarjeta" src={props.image} style={styles}>
            </div>
        </div>
        <Outlet/>
        </>
    );
}

export default CompTarjeta;
