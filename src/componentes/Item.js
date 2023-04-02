import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, pictureUrl, detalle, category}) => {
  return (
  <div className="Item-container" id={id} >
    <div className="detail">
        <img src={pictureUrl} alt={description} />
        <h3>{`${title}`}</h3> <h3>$ {`${price}`}</h3>
        <h4>{`${description}`}</h4>
        <p>{`${detalle}`}</p>
        <p>{`${category}`}</p>
    
    </div>
    <Link to={`/detalle/${id}`}>
        <button>Ver más</button>
    </Link>
  </div>
  );
} 


// const Item = (props) => {
//   const [contador, setCount] = useState(0);
//   return (
   
//     <div className="productos-img">
//       <img src={props.img} className="productos" alt={props.title} />
//       <h2>{props.title}</h2>
//       <p className="description">{props.description}</p>
//       <h3>$ { props.price }</h3>
//       <div className="productos__tarjeta-final">
//         <div className="productos__tarjeta-final-contador">
//           <p
//             onClick={() => {
//               if (contador > 0) {
//                 setCount((contador) => contador - 1);
//               }
//             }}
//           >
//             -
//           </p>
//           <h4>{contador}</h4>
//           <p
//             onClick={() => {
//               if (contador < 7) {
//                 setCount((contador) => contador + 1);
//               }
//             }}
//           >
//             +
//           </p>
//         </div>
//         <button href="#">Agregar al carrito</button>
//       </div>
//     </div>
//   );
// };
export default Item;


