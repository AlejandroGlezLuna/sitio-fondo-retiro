import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import CompTarjeta from "../components/tarjeta";
import Footer from "../components/footer";
import headerImagen from "../assets/img/header-servicios.jpg";
import planAsistido from "../assets/img/plan-asistido.png";
import planInformal from "../assets/img/plan-informal.png";
import CustomChatbot from "../components/chatbot";
import Menu from "./Menu";
import CompCalculadora from "../components/calculadora";
import CompCorrida from "../components/corrida";

function Planes(props) {
    return (
        <div>
            <Menu />
            <Header
                title="Nuestros planes de ahorro"
                subtitle="¿Cómo ahorrar?"
                backgroundImage={headerImagen}
            />
            <CustomChatbot />
            <CompTarjeta
                title="Plan de ahorro asistido"
                text="Un plan de ahorro es una estrategia para lograr tus metas financieras en un período de tiempo determinado. De tal forma, el objetivo es personalizarlo con fechas, acciones y cantidades que se ajusten a tus hábitos y a tu capacidad económica."
                to="/agendar"
                buttonText="Agendar cita"
                backgroundImage={planAsistido}
            />
            <CompTarjeta
                title="Ahorro informal"
                text="Puedes ahorrar desde $50 pesos. Ingresa al portal de internet de tu AFORE para saber cómo puedes hacer Ahorro Voluntario en línea. Acude a cualquier sucursal de la AFORE y realiza el depósito siguiendo las indicaciones que te den directamente en la ventanilla, no hay montos mínimos ni máximos"
                to="/conoceme"
                buttonText="¿Quién puede ayudarte a elegir?"
                backgroundImage={planInformal}
            />
            <CompCalculadora />
            <CompCorrida />
            <Footer />
        </div>
    );
}

export default Planes;