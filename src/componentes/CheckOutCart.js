import React, { useState } from "react";
import { createOrder } from "../Services/firestore";
import { useNavigate } from "react-router-dom";


function CheckoutCart({ cart, total }) {
  const [orderId, setOrderId] = useState(null)
  const navigateTo = useNavigate();

  async function handleCheckout( productData ) {
    
    const orderData = {
      buyer: productData,
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    
    const id = await createOrder(orderData);  
    setOrderId(id) 

    
    navigateTo(`/checkout/${id}`);

    // 4. vaciar el carrito del context
    // clearCart()
  }

  return (
  <div>
    {/* Formulario */}
    {
      orderId ? 
      <h3> Gracias por su compra</h3>
      :
      <button onClick={handleCheckout}>Terminar Compra</button>
    }
    
  </div>
  )
}

export default CheckoutCart;