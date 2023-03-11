import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/presentation.css';
import '../components/estilos/conoceme.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";



function Agendar(props) {
    return (
        <div>
            <Header />
            <Form />
            <Footer />
        </div>
    );
}

export default Agendar;