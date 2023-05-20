import { Outlet, Link } from "react-router-dom";
import '../components/estilos/menu.css';
import logo from '../assets/icons/inversion.png';

const Menu = () => {
  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
      <div>
        <nav>
          <a><Link to="/"><img src={logo} alt="Logo" class="logo" /></Link></a>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <ul>
            <li><a><Link to="/">Home</Link></a></li>
            <li><a><Link to="/agendar">Agendar</Link></a></li>
            <li><a><Link to="/servicios">Servicios</Link></a></li>
            <li><a><Link to="/conoceme">Conóceme</Link></a></li>
          </ul>
        </nav>

      </div>
      <Outlet />
    </>
  );
}

export default Menu;
