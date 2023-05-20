import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import './estilos/chat-bot.css';
import { FaHandsHelping } from 'react-icons/fa';

const steps = [
  { id: '1', message: '¿En qué puedo ayudarte hoy? Seleccione una opción:', trigger: '2' },
  {
    id: '2',
    options: [
      { value: 1, label: '¿Qué servicios ofrecen?', trigger: '3' },
      { value: 2, label: '¿Cómo los contacto?', trigger: '6'},
      { value: 3, label: '¿Quiero hablar con la asesora?', trigger: '6'},
    ]
  },
  {
    id: '3',
    options: [
      { value: 1, label: 'Análisis de necesidades de retiro: Hacemos un análisis detallado de las necesidades financieras individuales de mis clientes y les ayudo a establecer metas realistas para su retiro.', trigger: '4' },
      { value: 2, label: 'Asesoría en planes de ahorro y retiro: Este servicio es ideal para aquellos que buscan establecer un plan de ahorro y retiro. Trabajo con mis clientes para desarrollar un plan de ahorro personalizado que les permita maximizar su inversión y asegurar un futuro financiero sólido.', trigger: '4' },
      { value: 3, label: 'Consejería de ahorro e inversión: Es importante mantener comportamientos de ahorro e inversión alineados con las necesidades financieras individuales de cada persona. Como asesora, proporciono ideas prácticas de ahorro.', trigger: '4' },
    ]
  },
  { id: '4', message: 'Por favor, ingrese a la sección Agendar y solicite una cita', trigger: '7' },
  { id: '5', message: 'Lo siento, no entiendo. ¿Podrías elegir una de las opciones disponibles?', trigger: '2' },
  {
    id: '6',
    options: [
      { value: 1, label: 'WhastApp, envía un mensaje al: 3313327393', trigger: '7' },
      { value: 2, label: 'Correo electrónico: fondo-retiro-asesora-rojas@gmail.com', trigger: '7' },
      { value: 3, label: 'Todas nuestras redes sociales como: @asesora_rojas', trigger: '7' },
    ]
  },
  {
    id: '7',
    message: '¿Puedo ayudarte en algo más?',
    trigger: '8'
  },
  {
    id: '8',
    options: [
      { value: 1, label: 'Sí, por favor', trigger: '2'},
      { value: 2, label: 'No, gracias', end: true},
    ]
  },
];


const CustomChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-button" onClick={handleToggleChatbot}> <FaHandsHelping size={30} />Ayuda</button>
      {showChatbot && (
        <ChatBot
          steps={steps}
          style={{ width: '300px' }}
          headerTitle="Asesor virtual"
        />
      )}
    </div>
  );
};

export default CustomChatbot;