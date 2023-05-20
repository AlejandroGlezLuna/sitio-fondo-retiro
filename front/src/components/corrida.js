import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../components/estilos/calculadora.css';

function CompCorrida() {
  const [capital, setCapital] = useState(0);
  const tasaInteres = 5;
  const [periodos, setPeriodos] = useState(24); 
  const [resultado, setResultado] = useState(0);

  const calcularCorrida = () => {
    if (capital === 0 || periodos === 0) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos antes de calcular.',
        icon: 'error',
        confirmButtonText: "Aceptar",
        confirmButtonColor: '#3498db'
      });
    } else {
      const sumaInversion = capital * periodos;
      const interes = sumaInversion * (tasaInteres / 100);
      const montoFinal = sumaInversion + interes;
      setResultado(montoFinal.toFixed(2));

      Swal.fire({
        title: 'Resultado',
        text: `La suma de la inversión por los ${periodos} periodos más el interés es: $${resultado}`,
        icon: 'success',
        confirmButtonColor: '#3498db',
        confirmButtonText: "Aceptar"
      }).then(() => {
        setCapital(0);
        setPeriodos(24);
      });
    }
  };

  const handlePeriodosChange = (e) => {
    const newPeriodos = Number(e.target.value);
    if (!isNaN(newPeriodos) && newPeriodos >= 24) {
      setPeriodos(newPeriodos);
    }
  };

  return (
    <div className="contenedor-tarjeta">
      <div className="texto-tarjeta">
        <h2>Corrida Financiera</h2>
        <p>¡Aprovecha la oportunidad de invertir a plazos y haz crecer tu dinero! Con esta estrategia, podrás incrementar tu capital gradualmente gracias al interés compuesto. Establece un periodo y destina una cantidad fija regularmente. ¡Planifica tu futuro financiero de manera estructurada y alcanza tus metas económicas!</p>
        <label>Capital</label>
        <input
          className="input-estilo"
          type="number"
          value={capital}
          onChange={(e) => setCapital(Number(e.target.value))}
        />
        <label>Tasa de Interés fija (%)</label>
        <input
          className="input-estilo"
          type="number"
          value={tasaInteres}
          readOnly
        />

        <label>Quincenas mínimas 24 (dos años)</label>
        <input
          className="input-estilo"
          type="number"
          value={periodos}
          onChange={handlePeriodosChange}
        />
        <button className="boton-tarjeta" onClick={calcularCorrida}>Calcular</button>
      </div>
    </div>
  );
}

export default CompCorrida;
