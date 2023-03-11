import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/conoceme.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import Productos from "../components/productos";
import Footer from "../components/footer";



function Servicios(props) {
    return (
        <div>
            <Header />
            <Productos />
            <Footer />
        </div>
    );
}

export default Servicios;