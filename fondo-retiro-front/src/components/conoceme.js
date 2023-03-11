import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/conoceme.css';
import './estilos/generales.css';

function Asesora(props) {
    return (
        <>
        <div>
            <div className='container-conoceme'>
                <div className="conoceme-txt">
                    <h2>Conóceme</h2>
                    <p>Soy Cecilia Rojas, asesora para fondo para el retiro. Sé que la planificación para el retiro puede ser una tarea desafiante y estresante. Hay muchas opciones disponibles, y puede ser difícil saber qué plan se adapta mejor a tus necesidades financieras individuales. Por eso, mi objetivo como asesora financiera es ayudarte a tomar decisiones informadas y seguras y guiarlo en todo el proceso de planificación del retiro.
                        Mi enfoque se basa en entender tus metas financieras y tus objetivos de retiro, para así poder ofrecerte opciones de inversión personalizadas que se ajusten a tus necesidades y te permitan maximizar tus ingresos a largo plazo. También me aseguraré de que comprendas todas las opciones disponibles, los términos y condiciones, y los beneficios fiscales que conlleva cada plan de retiro.</p>
                    <button class="boton"><Link to="/conoceme">Más sobre mí</Link></button>
                </div>
                <div className="conoceme-img">
                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default Asesora;


