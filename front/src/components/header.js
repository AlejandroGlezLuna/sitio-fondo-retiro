import React from "react";
import '../components/estilos/header.css';

function Header(props) {
    const { backgroundImage } = props;

    const styles = {
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <div className="header" style={styles}>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    );
}

export default Header;