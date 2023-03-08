import { useState } from "react";
import React from "react";
import "./Item.css";

const Item = (props) => {
  const [contador, setCount] = useState(0);
  return (
    <div className="productos-img">
      <img src={props.img} className="productos" alt={props.title} />
      <h2>{props.title}</h2>
      <p className="description">{props.description}</p>
      <h3>$ { props.price }</h3>
      <div className="productos__tarjeta-final">
        <div className="productos__tarjeta-final-contador">
          <p
            onClick={() => {
              if (contador > 0) {
                setCount((contador) => contador - 1);
              }
            }}
          >
            -
          </p>
          <h4>{contador}</h4>
          <p
            onClick={() => {
              if (contador < 7) {
                setCount((contador) => contador + 1);
              }
            }}
          >
            +
          </p>
        </div>
        <button href="#">Agregar al carrito</button>
      </div>
    </div>
  );
};
export default Item;


