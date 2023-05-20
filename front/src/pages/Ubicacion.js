import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/footer.css';
import '../components/estilos/ubicacion.css';
import Header from "../components/header";
import CompUbicacion from "../components/ubicacion";
import Footer from "../components/footer";
import headerImagen from "../assets/img/header-conoceme.jpg";
import CustomChatbot from "../components/chatbot";
import Menu from "./Menu";


function Ubicacion(props) {
    return (
        <div>
            <Menu />
             <Header
                title="Visitanos y trabajemos por un futuro mejor"
                subtitle="Estás a punto de mejorar tu vida"
                backgroundImage={headerImagen}
            />
            <CustomChatbot />
            <CompUbicacion />
            <Footer />
        </div>
    );
}

export default Ubicacion;