import React, { useState } from "react";
import { createOrder } from "../Services/firestore";
import { useNavigate } from "react-router-dom";

function CheckoutCart({ cart, total }) {
  const navigateTo = useNavigate();

  async function handleCheckout( productData ) {
    // Enviar a Firebase la orden de compra
    // 1. Importar firebase (la funcion)
    // 2. Crear nuestro objeto de orden
    const orderData = {
      buyer: productData,
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    //createOrder(orderData)
    const id = await createOrder(orderData);   

    // 3. Darle feedback al usuario
    // 3.A - SweetAlert(id)
    // 3.B - Rending Condicional
    //setOrderId(id);

    // * 3.C - Redirección - React Router
    navigateTo(`/checkout/${id}`)

    // 4. vaciar el carrito del context
    // clearCart()
  }

  return (
  <div>
    {/* Formulario */}
    <button onClick={handleCheckout}>Terminar Compra</button>
  </div>
  )
}

export default CheckoutCart;