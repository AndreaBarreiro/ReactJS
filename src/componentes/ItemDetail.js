import React from "react";
// import { Link } from "react-router-dom";


function ItemDetail (Product){
    return (
        <div className="productos-content">
            {Product.map(product => {
                return <Product key={product.id} title={product.title} description={product.description} img={product.pictureUrl} price={product.price} detalle={product.detalle}/>
            })}
        </div>
    );
}

export default ItemDetail

// export default function ItemDetail({ items }) {
//     return (
//       <div className="item-detail">

//         <ul className="detail">
//           {items.map((item) => (
  
//             <ul className="item-list">
//             <li className="item-card" 
//             key={item.id}>
//             <img src={item.pictureUrl} alt={item.description} />
//             <h3>{`${item.title}`}</h3> <h3>$ {`${item.price}`}</h3>
//             <h4>{`${item.description}`}</h4>
//             <p>{`${item.detalle}`}</p>
//             <p>{`${item.category}`}</p>

//               <br />
  
//               <Link to={`/detalle/${item.id}`}>
//                 <button>Ver más</button>
//               </Link>
//           </li>
//           </ul>
            
//           ))}

//         </ul>
//       </div>
//     );
//   }