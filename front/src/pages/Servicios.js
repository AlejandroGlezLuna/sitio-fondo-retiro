import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import CompTarjeta from "../components/tarjeta";
import Footer from "../components/footer";
import CustomChatbot from "../components/chatbot";
import headerImagen from "../assets/img/header-servicios.jpg";
import serviciosAsesoria from "../assets/img/servicios-asesoria.png";
import serviciosConsejos from "../assets/img/servicios-consejos.png";
import serviciosPlanes from "../assets/img/servicios-planes.png";
import Menu from "./Menu";
import CompCalculadora from "../components/calculadora";
import CompCorrida from "../components/corrida";

function Servicios(props) {
    return (
        <div>
            <Menu />
            <Header
                title="Nuestros servicios de asesoría"
                subtitle="¿Cómo podemos ayudarte?"
                backgroundImage={headerImagen}
            />
            <CustomChatbot />
            <CompTarjeta
                title="Asesoría personalizada"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros. Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!"
                to="/agendar"
                buttonText="Agendar"
                backgroundImage={serviciosAsesoria}
            />
            <CompCalculadora />
            <CompTarjeta
                title="Consejos prácticos"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros. Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!"
                to="/consejos"
                buttonText="Aprender más"
                backgroundImage={serviciosConsejos}
            />
            <CompTarjeta
                title="Planes de ahorro"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros. Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!"
                to="/planes"
                buttonText="Opciones de ahorro"
                backgroundImage={serviciosPlanes}
            />
            <CompCorrida />
            <Footer />
        </div>
    );
}

export default Servicios;