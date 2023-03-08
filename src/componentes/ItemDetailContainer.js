import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pochis from "../../src/products/products";


function getOneItemFromDatabase(idItem) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = pochis.find((item) => item.id === Number(idItem));
        resolve(encontrado);
      }, 2000);
    });
  }


// return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         let encontrado = pochis.find((item) => item.id === Number(idItem));
//         resolve(encontrado);
//     }, 1000);
// });


function ItemDetailContainer ({greeting}){

    const [product, setProduct] = useState({});

    const params = useParams();
    const idProduct = params.idProduct;
  
    useEffect(() => {
        getOneItemFromDatabase(idProduct).then((respuesta) => {
            setProduct(respuesta);
          });
    },[]);
    
  
      return (
    <>
        <div className="productos-content">
            <h2>{greeting}</h2>

            <ul className="item-list">
          <li className="item-card" 
            key={product.id}>
            <img src={product.pictureUrl} alt={product.description} />
            <h4>{`${product.title} ${product.detalle} ${product.price}`}</h4>
            
            <button>Agregar al carrito</button>
          </li>
        </ul>
        </div>
    </>

    );
} 

      export default ItemDetailContainer;
    