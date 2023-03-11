import React from "react";
import './estilos/descripcion.css';
import './estilos/generales.css';

function Descripcion(props) {
    return (
        <div className="contenedor">
            <div className="columna-izquierda">
                <h2>Hola, mi nombre es Cecilia</h2>
                <p>Soy una asesora financiera especializada en fondos para el retiro. Mi objetivo es ayudarte a planificar y asegurar tu futuro financiero, para que puedas disfrutar de la vida después del trabajo sin preocupaciones.
                    Entiendo que la planificación para el retiro puede ser un tema abrumador y estresante, pero estoy aquí para hacer que el proceso sea fácil y sin complicaciones. Te ayudaré a establecer metas financieras claras y a desarrollar un plan de inversión personalizado que se adapte a tus necesidades y objetivos únicos.
                    Con mi experiencia y conocimientos, te guiaré en todo el proceso, desde la elección del mejor fondo de retiro hasta la implementación del plan y seguimiento regular de tus inversiones. Mi objetivo es asegurarme de que te sientas cómodo y seguro en tus decisiones financieras y de que obtengas el máximo beneficio de tu inversión.
                    No esperes más para asegurar tu futuro financiero. ¡Agenda una cita conmigo hoy mismo y comencemos a planificar juntos!</p>
                <div class="row">
                    <input type="submit" value="Solicitar cita" />
                </div>
            </div>
            <div className="columna-derecha">
            </div>
        </div>

    );
}

export default Descripcion;