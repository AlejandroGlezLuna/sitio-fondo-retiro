import React from "react";
import { Outlet, Link } from "react-router-dom";
import './estilos/footer.css';
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';



function Footer(props) {
    return (
        <>
            <section>
                <footer className="top">
                    <img />
                    <div className="links">
                        <div>
                            <h2>Sitio</h2>
                            <hr />
                            <a><Link to="/" className="link-estilo">Home</Link></a>
                            <a><Link to="/agendar" className="link-estilo">Agendar</Link></a>
                            <a><Link to="/servicios" className="link-estilo">Servicios</Link></a>
                            <a><Link to="/conoceme" className="link-estilo">Conóceme</Link></a>
                        </div>
                        <div>
                            <h2>Secciones</h2>
                            <hr />
                            <a><Link to="/consejos" className="link-estilo">Consejos prácticos</Link></a>
                            <a><Link to="/planes" className="link-estilo">Planes de ahorro</Link></a>
                            <a><Link to="/conoceme" className="link-estilo">Asesora</Link></a>
                            <a><Link to="/ubicacion" className="link-estilo">Ubicación</Link></a>
                        </div>
                    </div>
                </footer>
                <footer className="bottom">
                    <div className="legal">
                        <span> © 2023 Todos los derechos reservados </span>
                        <a> Licencias </a>
                        <a> Términos </a>
                        <a> Privacidad </a>
                    </div>
                    <div className="links">
                        <a className="icono" href="https://api.whatsapp.com/send?phone=3313327393">
                            <FaWhatsapp />
                        </a>
                        <a className="icono" href="https://www.instagram.com/@alejo_luna777/">
                            <FaInstagram />
                        </a>
                        <a className="icono" href="tel:+523313327393">
                            <FaPhone />
                        </a>
                        <a className="icono" href="mailto:alejoglezlunajw@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </footer>
            </section>
            <Outlet />
        </>
    );
}

export default Footer;