import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
import headerImagen from "../assets/img/header-agendar.jpg";
import Menu from "./Menu";


function Agendar(props) {
    return (
        <div>
            <Menu />
            <Header
                title="Agenda una cita para recibir orientación"
                subtitle="Comencemos juntos"
                backgroundImage={headerImagen}
            />
            <Form />
            <Footer />
        </div>
    );
}

export default Agendar;