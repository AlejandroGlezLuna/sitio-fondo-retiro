import React from 'react';
import './estilos/descripcion.css';
import './estilos/generales.css';

function Presentation(props) {

    return (
        <div>
            <div className='container-presentation'>
                <div className="presentation-txt">
                    <h2>Planea tu futuro financiero con la asesoría experta para fondos de retiro</h2>
                    <p>En nuestro fondo para el retiro, te brindamos la oportunidad de desconectar del ajetreo de la vida cotidiana y reconectar contigo mismo. Descubre un lugar de paz y tranquilidad, donde podrás encontrar la inspiración y el equilibrio que necesitas para vivir una vida plena. ¡Únete a nuestra comunidad y comienza tu viaje hacia la serenidad hoy mismo!</p>
                </div>
                <div className="presentation-img">
                </div>
            </div>
        </div>
    );
}

export default Presentation;