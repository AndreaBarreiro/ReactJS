import "./NavBar.css";
import "./Footer.css";
import POCHIROKES from "../img/POCHITROKES.gif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
     
      <div>
        <a href="/">
          <img src={POCHIROKES} className="logoF" alt="logo" />
        </a>
      </div>
      &copy; Copyright 2023 E-Commerce creado por Barreiro A.-
      <div className="enlaces">
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/juguetes">Juguetes</Link>
          </li>
          <li>
            <Link to="/category/ropadeblanco">Ropa de Blanco</Link>
          </li>
          <li>
            <Link to="/category/accesorios">Accesorios</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
