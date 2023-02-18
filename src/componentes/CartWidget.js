import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";

function CartWidget() {
  return (
    <a href="#" class="cartWidget">
      <IoCartOutline className="icon" />
      <span class="contador">2</span>
    </a>
  );
}

export default CartWidget;
