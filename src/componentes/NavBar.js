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
          <h1>
            ... una tienda <br></br> muy especial...
          </h1>
        </div>

        <div className="enlaces">
          <ul className="menu" >
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

        <div className="carrito">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
