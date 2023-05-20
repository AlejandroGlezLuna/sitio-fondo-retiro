import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/ubicacion.css';

function CompUbicacion(props) {

    return (
        <>
            <div className="contenedor-ubicacion">
                <div className="texto-ubicacion">
                    <h2>Te invitamos a visitar nuestra oficina</h2>
                    <div className="oculta-ubicacion">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59718.33902590888!2d-103.40019357652365!3d20.69413039000402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af91c6719a67%3A0x15381fff8185db6f!2sMidtown%20Jalisco!5e0!3m2!1ses-419!2smx!4v1681441059955!5m2!1ses-419!2smx"
                         ></iframe>
                    </div>
                    <p>En nuestra oficina, encontrarás un ambiente acogedor y profesional en el que podrás sentirte cómodo y seguro mientras discutes tus preocupaciones y metas financieras. Nuestra asesora está disponible para responder a cualquier pregunta que puedas tener y trabajar contigo para encontrar soluciones prácticas y efectivas.</p>
                    <p>Así que si estás listo para tomar el control de tu futuro financiero y construir una jubilación sólida, te invitamos a visitar nuestra oficina hoy mismo. ¡Esperamos verte pronto!</p>
                    <div>
                        <button className="boton-ubicacion"><Link to="/agendar" className="link-ubicacion">Solicitar cita</Link></button>
                    </div>
                </div>
                <div className="imagen-ubicacion">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59718.33902590888!2d-103.40019357652365!3d20.69413039000402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af91c6719a67%3A0x15381fff8185db6f!2sMidtown%20Jalisco!5e0!3m2!1ses-419!2smx!4v1681441059955!5m2!1ses-419!2smx"
                    ></iframe>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default CompUbicacion;