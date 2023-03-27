import React from "react";
import { useContext } from "react";
import cartContext from "../Context/cartContext";
import CheckoutCart from "./CheckOutCart";

function CartContainer() {
    const { cart  , removeItemfromCart, getPriceInCart} = useContext(cartContext);

    return (
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
                  <img height={50} src={product.title} alt={product.category} />
                </td>
                <td>{product.title}</td>
                <td>$ {product.price}</td>
                <td>{product.count}</td>
                <td>
                  <button color="#c63224" >X</button>
                </td>
                <th>$ --,--</th>
              </tr>
            );
          })}
          </tbody>
        </table>
  
        <div className="cartList_detail">
          <h4>El total de tu compra es de $ --,--</h4>
        </div>
        <CheckoutCart total={getPriceInCart()} cart={cart}/>

      </>
    );
  }

  export default CartContainer