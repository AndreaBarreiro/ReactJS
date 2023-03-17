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
        <div>
            <button onClickButton={decrease} >
                - 
            </button>

            <div> {count} </div>
            
            <button onClickButton={increase} >
                + </button>
            <button onClick={()=> onAddtoCart(count)} > Agregar al carrito </button>

        </div>
    );
};

export default ItemCount;