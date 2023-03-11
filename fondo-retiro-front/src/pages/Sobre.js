import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/conoceme.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import Descripcion from "../components/descripcion";
import Footer from "../components/footer";



function Sobre(props) {
    return (
        <div>
            <Header />
            <Descripcion />
            <Footer />
        </div>
    );
}

export default Sobre;