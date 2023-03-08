import React from 'react';
import { Link } from "react-router-dom";


// export const getFetch = new Promise ((response, rejected) => {
//     let cargaUrl = "https://andreabarreiro.github.io/ReactJS/"
//     if (cargaUrl === "https://andreabarreiro.github.io/ReactJS/") {
//         setTimeout(()=> {response(items);}, 2000)
//     }
//     else {
//         rejected ("Error")
//     }
// })
// function ItemList (items) {

//     return (
//         <div className="productos-content">
//             {items.map(items => {
//                 return <Item key={items.id} title={items.title} description={items.description} img={items.pictureUrl} price={items.price} />
//             })}
//         </div>
//     );
// };

export default function ItemList({ items }) {
    return (
      <div className="item-list-container">

        <ul className="item-list">
          {items.map((item) => (
  
            <ul className="item-list">
          <li className="item-card" 
            key={item.id}>
            <img src={item.pictureUrl} alt={item.description} />
            <h4>{`${item.title} ${item.detalle} ${item.price}`}</h4>
            <small>{item.category}</small>
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
  

// recibe el props y mapea 
