import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import CompAsesora from "../components/asesora";
import Footer from "../components/footer";
import headerImagen from "../assets/img/header-conoceme.jpg";
import CustomChatbot from "../components/chatbot";
import Menu from "./Menu";


function Sobre(props) {
    return (
        <div>
            <Menu />
             <Header
                title="Asegurémos juntos un futuro firme"
                subtitle="¿Estás listo?"
                backgroundImage={headerImagen}
            />
            <CustomChatbot />
            <CompAsesora />
            <Footer />
        </div>
    );
}

export default Sobre;