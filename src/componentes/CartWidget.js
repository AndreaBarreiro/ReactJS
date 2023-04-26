import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";
import { useContext } from "react";
import cartContext from "../Context/cartContext";

function CartWidget() {
  const { cart, test } = useContext (cartContext);
  

  const cartCount = cart.length //sacar y ver como lo consume el cardwidget desde navbar

  return (

    <span className="cart-widget">
      <IoCartOutline className="icon" />
      <span className="badge">{cartCount}</span>
    </span>
  );
}

export default CartWidget;
