import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/info.css';

function CompInfo(props) {
    return (
        <>
            <div>
                <div className='contenedor-info'>
                    <div className="info-txt">
                        <h2>Bienvenidos a mi sitio web</h2>
                        <p>Mi objetivo es ayudarte a planificar y maximizar tu ahorro para el retiro. Te proporcionaré asesoramiento personalizado para que puedas tomar decisiones informadas sobre tus finanzas. Juntos, podemos diseñar una estrategia de inversión que te permita alcanzar tus objetivos de retiro y vivir la vida que deseas.</p>
                        <button class="boton-info"><Link to="/conoceme"  className="link-estilo">Conóceme más</Link></button>
                    </div>
                    <div className="info-img">
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default CompInfo;