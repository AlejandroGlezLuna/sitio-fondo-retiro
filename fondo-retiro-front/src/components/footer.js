import React from "react";
import './estilos/footer.css';
import './estilos/generales.css';


function Footer(props) {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="social-icons-container">
                        <p>¡Síguenos en nuestras redes sociales!</p>
                        <ul class="social-icons">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;