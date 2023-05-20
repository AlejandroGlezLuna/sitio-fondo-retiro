import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './estilos/form.css'
import Swal from 'sweetalert2' 

const URI = 'http://localhost:8000/clientes/'

const Form = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate()
  const resetForm = () => {
    setNombre('')
    setEmail('')
    setTelefono('')
    setMensaje('')
  }
  
  const store = async (e) => {
    e.preventDefault()
    if (nombre.length === 0 || email.length === 0 || telefono.length === 0 || mensaje.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor, completa todos los campos del formulario',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3498db'
      })
      return
    }
    try {
      await axios.post(URI, { nombre: nombre, email: email, telefono: telefono, mensaje: mensaje })
      Swal.fire({
        icon: 'success',
        title: '¡Datos enviados!',
        text: 'En breve la asesora se contactará contigo',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3498db'
      })
      resetForm()
    } catch (error) {
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Ha ocurrido un error al enviar tus datos. Por favor, inténtalo de nuevo',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  return (
    <div className='contenedor-formulario'>
      <div className='texto-formulario'>
        <h2>Agendar cita</h2>
        <div className="oculta-formulario"></div>
        <p>Si estás pensando en planificar tu futuro financiero y deseas obtener asesoría sobre fondos para el retiro, estás en el lugar adecuado. Te invitamos a agendar una cita con nuestro equipo de expertos para recibir la mejor orientación y guía en la toma de decisiones importantes en cuanto a tu fondo para el retiro se refiere. Nuestro formulario de registro es fácil y sencillo de llenar, solo necesitas proporcionar algunos datos básicos y elegir la fecha y hora de tu preferencia para la asesoría. ¡No esperes más, planifica tu futuro financiero hoy mismo!</p>
        <form onSubmit={store}>
          <div >
            <label >Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
            />
          </div>
          <div >
            <label >Correo</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div >
            <label >Teléfono</label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
            />
          </div>
          <div >
            <label >Mensaje</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>
          <button className="boton-formulario" type='submit'>Enviar datos</button>
        </form>
      </div>
      <div className="imagen-formulario">

      </div>
    </div>

  )
}

export default Form