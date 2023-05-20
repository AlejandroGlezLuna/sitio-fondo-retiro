import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import Menu from "./Menu";
import CompConsejos from "../components/consejos";
import Footer from "../components/footer";
import headerImagen from "../assets/img/consejos-header.jpg";
import CustomChatbot from "../components/chatbot";
import consejosDeuda from "../assets/img/consejos-deuda.png";
import consejoPresupuesto from "../assets/img/consejos-presupuesto.png";
import consejoProfesional from "../assets/img/consejos-profesional.png";
import CompCorrida from "../components/corrida";

function Consejos(props) {
    return (
        <div>
            <Menu />
            <Header
                title="Ideas para ahorrar"
                subtitle="Pequeñas acciones, grandes resultados"
                backgroundImage={headerImagen}
            />
            <CustomChatbot />
            <CompConsejos
                title="Paga tus deudas"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros. Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!"
                backgroundImage={consejosDeuda}
            />
            <CompCorrida />
            <CompConsejos
                title="Ten un presupuesto"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros. Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!"
                backgroundImage={consejoPresupuesto}
            />
            <CompConsejos
                title="Busca ayuda profesional"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros. Agendar una cita con una asesora para un fondo de retiro puede proporcionarte información valiosa, ahorro de tiempo y esfuerzo, ayuda en la toma de decisiones, planificación para el futuro y ahorro de dinero. ¡Esperamos verte pronto!"
                backgroundImage={consejoProfesional}
            />
            <Footer />
        </div>
    );
}

export default Consejos;