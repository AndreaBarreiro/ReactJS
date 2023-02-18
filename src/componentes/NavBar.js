import "./NavBar.css";
import CartWidget from "./CartWidget";
import POCHIROKES from "../img/POCHITROKES.gif";

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
              <a href="#">Nosotros</a>
              <a href="#">PochiProductos</a>
              <a href="#">Contacto</a>
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
