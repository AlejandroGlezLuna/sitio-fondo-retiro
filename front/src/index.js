import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Home from "./pages/Home";
import Agendar from "./pages/Agendar";
import Sobre from "./pages/Sobre";
import Servicios from "./pages/Servicios";
import Planes from "./pages/Planes";
import Consejos from "./pages/Consejos";
import Ubicacion from "./pages/Ubicacion";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/agendar" element={<Agendar/>} />
        <Route path="/conoceme" element={<Sobre/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/planes" element={<Planes/>} />
        <Route path="/consejos" element={<Consejos/>} />
        <Route path="/ubicacion" element={<Ubicacion/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);