import React from "react";
import './estilos/form.css';
import './estilos/generales.css';

function Form(props) {
    return (
        <div className="contenedor">
            <div className="columna-izquierda">

                <div className="form">
                    <h2>¿Necesitas ayuda con tu plan de retiro?</h2>
                    <p>No pospongas la planificación de tu retiro - ¡Agenda una cita con nuestra asesora ahora!</p>
                    <p>Agendar una cita con una asesora para fondo para el retiro es importante porque te permite obtener una guía personalizada en la planificación de tu retiro financiero. Una asesora puede ayudarte a entender tus opciones de inversión y diseñar un plan personalizado que se ajuste a tus necesidades específicas y objetivos financieros. Además, al agendar una cita, puedes hacer preguntas y recibir respuestas directas y claras sobre todo lo relacionado.</p>
                    <div className="container-form">
                        <form>
                            <div className="row">
                                <div className="col-25">
                                    <label for="fname">Nombre</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="nombre" name="firstname" placeholder="Tu nombre.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label for="fname">Correo electrónico</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="mail" name="firstname" placeholder="Tu correo electrónico.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label for="fname">Teléfono</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="telefono" name="firstname" placeholder="Tu teléfono.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label for="fname">Hora y fecha de cita</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fecha" name="firstname" placeholder="Fecha de cita.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label for="fname">¿Cómo puedo ayudarte?</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="comentario" name="firstname" placeholder="Escribe un comentario.." />
                                </div>
                            </div>
                            <div class="row">
                                <input type="submit" value="Enviar solicitud" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div className="columna-derecha-1">
            </div>
        </div>

    );
}

export default Form;