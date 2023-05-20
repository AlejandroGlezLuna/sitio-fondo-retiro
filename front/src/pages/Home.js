import React from "react";
import Header from "../components/header";
import CompPresentacion from "../components/presentacion.js";
import CompCenter from "../components/centro";
import CompTarjeta from "../components/tarjeta";
import Footer from "../components/footer";
import headerImagen from "../assets/img/header-home.jpg";
import homeAsesoria from "../assets/img/home-asesoria.png";
import homeConsejos from "../assets/img/home-consejos.png";
import homeConoceme from "../assets/img/home-conoceme.png";
import CustomChatbot from "../components/chatbot";
import Menu from "./Menu";



function Home(props) {
    return (
        <div>
            <Menu />
            <Header
                title="Has llegado a asegurar tu futuro"
                subtitle="Bienvenido"
                backgroundImage={headerImagen}
            />
            <CustomChatbot />
            <CompPresentacion />
            <CompCenter />
            <CompTarjeta
                title="Soluciones a tu alcance"
                text="Estamos ansiosos por ayudarte a planificar tu futuro financiero y estamos disponibles para responder cualquier pregunta que puedas tener. Durante la cita, nuestro asesor financiero te brindará información sobre cómo ahorrar para tu retiro y te ayudará a elegir el mejor fondo de retiro según tus necesidades y objetivos financieros."
                to="/agendar"
                buttonText="Agendar cita"
                backgroundImage={homeAsesoria}
            />
             <CompTarjeta
                title="Conoce los planes de ahorro"
                text="Mi objetivo es ayudarte a planificar y maximizar tu ahorro para el retiro. Te proporcionaré asesoramiento personalizado para que puedas tomar decisiones informadas sobre tus finanzas. Juntos, podemos diseñar una estrategia de inversión que te permita alcanzar tus objetivos de retiro y vivir la vida que deseas."
                to="/consejos"
                buttonText="Ver consejos"
                backgroundImage={homeConsejos}
            />
            <CompTarjeta
                title="Vayamos juntos por un mejor futuro"
                text="Mi objetivo es ayudarte a planificar y maximizar tu ahorro para el retiro. Te proporcionaré asesoramiento personalizado para que puedas tomar decisiones informadas sobre tus finanzas. Juntos, podemos diseñar una estrategia de inversión que te permita alcanzar tus objetivos de retiro y vivir la vida que deseas."
                to="/conoceme"
                buttonText="Conóceme"
                backgroundImage={homeConoceme}
            />
            <Footer />
        </div>
    );
}

export default Home;


