import React from "react";
import '../components/estilos/header.css';
import '../components/estilos/presentation.css';
import '../components/estilos/conoceme.css';
import '../components/estilos/footer.css';
import Header from "../components/header";
import Presentation from "../components/presentation";
import Center from "../components/center";
import Agendar from "../components/agendarcita";
import Asesora from "../components/conoceme";
import Footer from "../components/footer"




function Home(props) {
    return (
        <div>
            <Header />
            <Presentation />
            <Center />
            <Agendar />
            <Asesora />
            <Footer />
        </div>
    );
}

export default Home;