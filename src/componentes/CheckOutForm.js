import React, { useState } from "react";
import "./CheckOutForm.css";

export default function CheckoutForm(props) {
  const [productData, setProductData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(productData);

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newProductData = { ...productData };
    newProductData[input] = value;
    setProductData(newProductData);
  }

  function clearForm() {
    setProductData({
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(productData)
  }

  return (
    <div className="formulario-chekout" >
      <h2>Completa tus datos para completar la compra </h2>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input
          value={productData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input
          value={productData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
        <input
          value={productData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
      <button
        disabled={
          !(
            productData.name !== "" &&
            productData.phone !== "" &&
            productData.email !== ""
          )
        }
        onClick={submitData}
      >
        Crear Orden de Compra
      </button>
      
      <button style={{ marginTop: "1rem" }} onClick={clearForm}>Limpiar formulario</button>
    </div>
  );
}