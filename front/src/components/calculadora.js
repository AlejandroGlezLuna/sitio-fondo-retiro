import React, { useState } from "react";
import './estilos/calculadora.css';
import Swal from 'sweetalert2';

function CompCalculadora() {
  const [edadActual, setEdadActual] = useState("");
  const [edadRetiro, setEdadRetiro] = useState("");
  const [aportacionMensual, setAportacionMensual] = useState("");
  const [ahorroTotal, setAhorroTotal] = useState(0);
  const [interesesGenerados, setInteresesGenerados] = useState(0);
  const [bancoSeleccionado, setBancoSeleccionado] = useState("Bancomer");

  const validarNumero = (valor) => {
    if (!isNaN(parseFloat(valor))) {
      return true;
    }
    return false;
  };
  
  const calcularIntereses = (banco) => {
    const totalSavings = parseFloat(ahorroTotal);
    let intereses = 0;

    switch (banco) {
      case "Bancomer":
        // Cálculo de intereses para el Banco A
        intereses = totalSavings * 0.035;
        break;
      case "Santander":
        // Cálculo de intereses para el Banco B
        intereses = totalSavings * 0.025;
        break;
      case "Imbursa":
        // Cálculo de intereses para el Banco C
        intereses = totalSavings * 0.018;
        break;
      default:
        intereses = 0;
    }

    setInteresesGenerados(intereses.toFixed(2));
  };

  const handleSeleccionBanco = (e) => {
    setBancoSeleccionado(e.target.value);
  };

  const calcularAhorro = () => {
    if (!edadActual || !edadRetiro || !aportacionMensual) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor completa todos los campos.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: '#3498db'
      });
      return;
    }
  
    if (!validarNumero(edadActual) || !validarNumero(edadRetiro) || !validarNumero(aportacionMensual)) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor ingresa solo números en los campos.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: '#3498db'
      });
      return;
    }
  
    const yearsToRetire = parseInt(edadRetiro) - parseInt(edadActual);
    const monthlySavings = parseFloat(aportacionMensual);
    const totalSavings = monthlySavings * 12 * yearsToRetire;
    const formattedSavings = totalSavings.toFixed(2);
  
    let interesesGenerados = 0;
  
    switch (bancoSeleccionado) {
      case "Bancomer con 3.5%":
        interesesGenerados = totalSavings * 0.035;
        break;
      case "Santander con 2.5%":
        interesesGenerados = totalSavings * 0.025;
        break;
      case "Imbursa con 1.8%":
        interesesGenerados = totalSavings * 0.018;
        break;
      default:
        interesesGenerados = 0;
    }
  
    const totalAmount = totalSavings + interesesGenerados;
  
    Swal.fire({
      title: "¡Ahorro calculado!",
      text: `Tu ahorro aproximado total es de $${totalAmount.toFixed(2)} con ${bancoSeleccionado} de rendimiento ya añadido.`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: '#3498db'
    });
  
    setAhorroTotal(formattedSavings);
    setInteresesGenerados(interesesGenerados.toFixed(2));
    setEdadActual("");
    setEdadRetiro("");
    setAportacionMensual("");
  };
  
  

  return (
    <div className="contenedor-tarjeta">
      <div className="texto-tarjeta">
        <h3>Calcula la cantidad de tu ahorro para el retiro</h3>
        <p>Mediante aportaciones mensuales predefinidas directas de tu nómina</p>
        <p>En el mundo actual, ahorrar para el futuro es más importante que nunca. Sin embargo, muchas personas pueden sentirse abrumadas por la tarea de ahorrar para la jubilación. Afortunadamente, la tecnología puede ayudar a hacerlo más fácil y accesible para todos. Es aquí donde entra en juego una herramienta valiosa: la calculadora de ahorro para el retiro.</p>
        <label>Edad actual</label>
        <input value={edadActual} onChange={(e) => setEdadActual(e.target.value)}></input>
        <label>Edad de retiro</label>
        <input value={edadRetiro} onChange={(e) => setEdadRetiro(e.target.value)}></input>
        <label>Aportación mensual</label>
        <input value={aportacionMensual} onChange={(e) => setAportacionMensual(e.target.value)}></input>
        <label>Banco</label>
        <select value={bancoSeleccionado} onChange={handleSeleccionBanco}>
          <option value="Bancomer con 3.5%" className="opcion-select">Bancomer</option>
          <option value="Santander con 2.5%" className="opcion-select">Santander</option>
          <option value="Imbursa con 1.8%" className="opcion-select">Imbursa</option>
        </select>
        <button className="boton-tarjeta" onClick={calcularAhorro}>Calcular</button>
      </div>
    </div>
  );
}

export default CompCalculadora;
