import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/asesora.css';

function CompAsesora(props) {
    return (
        <>
            <div className="contenedor-asesora">
                <div className="texto-asesora">
                    <h2>Hola, mi nombre es Cecilia</h2>
                    <div className="oculta-asesora"></div>
                    <p>Soy una asesora financiera especializada en fondos para el retiro. Mi objetivo es ayudarte a planificar y asegurar tu futuro financiero, para que puedas disfrutar de la vida después del trabajo sin preocupaciones.
                        Entiendo que la planificación para el retiro puede ser un tema abrumador y estresante, pero estoy aquí para hacer que el proceso sea fácil y sin complicaciones.</p>
                    <p>Mi objetivo es asegurarme de que te sientas cómodo y seguro en tus decisiones financieras y de que obtengas el máximo beneficio de tu inversión.
                        No esperes más para asegurar tu futuro financiero. ¡Agenda una cita conmigo hoy mismo y comencemos a planificar juntos!</p>
                    <div className="row">
                        <button className="boton-asesora"><Link to="/agendar" className="link-asesora">Solicitar cita</Link></button>
                    </div>
                </div>
                <div className="imagen-asesora">
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default CompAsesora;