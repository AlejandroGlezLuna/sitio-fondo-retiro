import React from 'react';
import  './estilos/menu.css';
import './estilos/generales.css';

function Menu(props) {
  function myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#news">Servicios</a>
        <a href="#contact">Cita</a>
        <a href="#about">Conóceme</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Menu;
