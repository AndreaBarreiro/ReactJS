import React from "react";
import { useContext } from "react";
import cartContext from "../Context/cartContext";
import CheckoutCart from "./CheckOutCart";
import "./CartContainer.css";

function CartContainer() {
  const { cart, removeItem, getPriceInCart, clear } = useContext(cartContext);

  return cart.length === 0 ? (
    <div className="empty">
      <h1>No hay Items en el Carrito</h1>
    </div>
  ) : (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Quitar</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id} className="cartList_row">
                <td>
                  <img
                    height={50}
                    src={product.pictureUrl}
                    alt={product.category}
                  />
                </td>
                <td style={{ backgroundColor: "Moccasin" }}>{product.title}</td>
                <td>$ {product.price}</td>
                <td style={{ backgroundColor: "Moccasin" }}>{product.count}</td>
                <td>
                  <button
                    style={{ marginLeft: 0 }}
                    onClick={() => removeItem(product.id)}
                  >
                    ❌
                  </button>
                  <button onClick={clear}>Vaciar Carrito</button>
                </td>
                <th style={{ backgroundColor: "Khaki" }}>
                  $ {getPriceInCart()}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ {getPriceInCart()}</h4>
      </div>

      <CheckoutCart total={getPriceInCart()} cart={cart} />
    </>
  );
}

export default CartContainer;
