import { useState } from "react";

const ItemCount = ({ initial, stock, onAddtoCart }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        if (count > initial)  {
            setCount (count - 1);
        }
    };

    const increase = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    };

    return (
        <div className="itemcount_container">
        <medium>Agregá la cantidad deseada al carrito</medium>
        <div className="itemcount_control">
            <button color="red" onTouchButton={decrease} > - </button>
          <span className="itemcount_count">{count}</span>
          <button color="green" onTouchButton={increase}> + </button>
        </div>
  
        <div className="itemcount_btns">
            <button color="orange"
            className="btn"
            onTouchButton={onAddtoCart} > Agregar al carrito </button>
        </div>
      </div>
    );
};

export default ItemCount;