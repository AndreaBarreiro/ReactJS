import "./NavBar.css";
import CartWidget from "./CartWidget";
import POCHIROKES from "../img/POCHITROKES.gif";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <header className="header">
        <div>
          <a href="/">
            <img src={POCHIROKES} className="logo" alt="logo" />
          </a>
        </div>

        <div className="h-uno">
          <h1>... una tienda <br></br> muy especial...</h1>
        </div>

        <div className="enlaces">
          <nav>
            <ul>
              <link to="/">Inicio</link>
              <link to="/detalle">PochiProductos</link>
              <link to="/category/juguetes">Juguetes</link>
              <link to="/category/ropadeblanco">Ropa de Blanco</link>
              <link to="/category/accesorios">Accesorios</link>
            </ul>
          </nav>
        </div>

        <div className="carrito">
          <CartWidget />
        </div>
      </header>
    </div>
  );
}

export default NavBar;
