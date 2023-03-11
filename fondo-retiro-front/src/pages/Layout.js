import { Outlet, Link } from "react-router-dom";
import '../components/estilos/menu.css';

const Layout = () => {
  return (
    <>
      <div>
      <div className="topnav" id="myTopnav">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/agendar">Agendar</Link></a>
        <a><Link to="/servicios">Servicios</Link></a>
        <a><Link to="/conoceme">Conoceme</Link></a>
      </div>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;

