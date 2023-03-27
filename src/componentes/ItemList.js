import React from 'react';
import { Link } from "react-router-dom";
import "./ItemList.css";


export default function ItemList({ products }) {
    return (
      <div className="item-list-container">

        <ul className="item-list">
          {products.map((product) => (
  
            <ul className="item-list">
            <li className="item-card" 
            key={product.id}>
            <img src={product.pictureUrl} alt={product.description} />
            <h4>{`${product.title}`}</h4>
            <h4>$ {`${product.price}`}</h4>
              <br />
  
              <Link to={`/detalle/${product.id}`}>
                <button>Ver más</button>
              </Link>
          </li>
          </ul>
            
          ))}

        </ul>
      </div>
    );
  }
  

