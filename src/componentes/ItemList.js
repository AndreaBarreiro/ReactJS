import React from 'react';
import { Link } from "react-router-dom";
import "./ItemList.css";


export default function ItemList({ items }) {
    return (
      <div className="item-list-container">

        <ul className="item-list">
          {items.map((item) => (
  
            <ul className="item-list">
            <li className="item-card" 
            key={item.id}>
            <img src={item.pictureUrl} alt={item.description} />
            <h4>{`${item.title}`}</h4>
            <h4>$ {`${item.price}`}</h4>
              <br />
  
              <Link to={`/detalle/${item.id}`}>
                <button>Ver más</button>
              </Link>
          </li>
          </ul>
            
          ))}

        </ul>
      </div>
    );
  }
  

