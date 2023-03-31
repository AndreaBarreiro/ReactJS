import React from 'react';
import { Link } from "react-router-dom";
import "./ItemList.css";


export default function ItemList({ products }) {
    return (
      <div className="item-list-container">

        <ul className="item-list">
          {products.map((product) => (
  
            // <ul className="item-list">
            /* <li className="item-card" key={product.id}> */
            <li style={{ color: product.stock === 0 ? "#ee0033" : "#151515" }}
            className="item-card"  key={product.id} >

            <img src={product.pictureUrl} alt={product.description} />

            {product.stock === 0 && <small>No hay stock</small>}
            <h4>{`${product.title}`}</h4>
            <h4>$ {`${product.price}`}</h4>
              <br />
  
              <Link to={`/detalle/${product.id}`}>
                <button>Ver más</button>
              </Link>
          </li>
           ))}
          </ul>
      </div>
    );
  }
  

