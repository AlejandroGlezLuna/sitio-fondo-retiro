import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './estilos/productos.css';


function Productos(props) {

return (
    <>
    <div>
        <div className='container-conoceme'>
            <div className="conoceme-txt">
                <h2>Análisis de necesidades de retiro</h2>
                <p>Este servicio es fundamental para cualquier persona que quiera planificar su retiro. Hago un análisis detallado de las necesidades financieras individuales de mis clientes y les ayudo a establecer metas realistas para su retiro. Juntos, revisamos los diferentes planes de inversión disponibles y seleccionamos el que mejor se ajuste a sus necesidades.</p>
            </div>
            <div className="conoceme-img analisis">
            </div>
        </div>    
        <div className='container-conoceme'>
            <div className="conoceme-txt">
                <h2>Asesoría en planes de ahorro y retiro</h2>
                <p>Este servicio es ideal para aquellos que buscan establecer un plan de ahorro y retiro. Trabajo con mis clientes para desarrollar un plan de ahorro personalizado que les permita maximizar su inversión y asegurar un futuro financiero sólido. Les proporciono información detallada sobre los diferentes planes de retiro disponibles y los beneficios y riesgos asociados con cada uno de ellos.</p>
            </div>
            <div className="conoceme-img asesoria">
            </div>    
        </div>
        
        <div className='container-conoceme'>
            <div className="conoceme-txt">
                <h2>Seguimiento y ajuste de planes de inversión</h2>
                <p>Es importante mantener los planes de inversión alineados con las necesidades financieras individuales de cada persona. Como asesora, proporciono un seguimiento continuo de los planes de inversión y recomiendo ajustes según sea necesario. Esto asegura que mis clientes estén siempre en el camino correcto para alcanzar sus metas financieras.</p>
            </div>
            <div className="conoceme-img inversion">
            </div>
        </div>
        <div className='container-conoceme'>
            <div className="conoceme-txt">
                <h2>Educación financiera</h2>
                <p>La educación financiera es una parte importante del proceso de planificación para el retiro. Ofrezco asesoramiento en temas financieros, incluyendo ahorros, inversión, presupuesto y gestión de deudas. Enseño a mis clientes a tomar decisiones financieras informadas y les proporciono herramientas y recursos para tomar el control de sus finanzas y asegurar un futuro financiero sólido.</p>
                <button class="boton"><Link to="/agendar">Agendar cita</Link></button>
            </div>
            <div className="conoceme-img educacion">
            </div>
        </div>
    </div>
    <Outlet />
    </>
    
);
}


export default Productos;