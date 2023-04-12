import { useState } from "react";
import "./ItemCount.css";


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
        <small style={{fontSize: "1rem"}} >Agregá la cantidad deseada al carrito</small>
        <div className="itemcount_control">
            <button onClick={decrease} > - </button>
          <span className="itemcount_count">{count}</span>
          <button onClick={increase}> + </button>
        </div>
  
        <div className="itemcount_btns">
            <button color="orange"
            className="btn"
            onClick={() => onAddtoCart(count)} > Agregar al carrito </button>
        </div>
      </div>
    );
};

export default ItemCount;