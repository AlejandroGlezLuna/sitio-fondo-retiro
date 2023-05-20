import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/descripcion.css';

function Conoceme(props) {
    return (
        <>
            <div>
                <div className='container-agendar'>
                    <div className="agendar-txt">
                        <h2>Soluciones a tu alcance</h2>
                        <p>Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros.
                            Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!</p>
                        <button class="boton-agendar btn-font"><Link to="/agendar" className="link-estilo">Agendar cita</Link></button>
                    </div>
                    <div className="agendar-img">
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Conoceme;


