import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";
import { useContext } from "react";
import cartContext from "../Context/cartContext";

function CartWidget() {
  const { cart } = useContext (cartContext);

  const cartCount = cart.length

  return (
    <a href="#" class="cartWidget">
      <IoCartOutline className="icon" />
      <span class="contador">{cartCount}</span>

    </a>
  );
}

export default CartWidget;
