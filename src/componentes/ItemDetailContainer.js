import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pochis from "../../src/products/products";
import "./ItemListContainer.css";
import "./ItemDetailContainer.css";


// function getOneItemFromDatabase(idItem) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let encontrado = pochis.find((item) => item.id === Number(idItem));
//         resolve(encontrado);
//       }, 2000);
//     });
//   }


function ItemDetailContainer ({greeting}){

    const [product, setProduct] = useState({});

    const params = useParams();
    const idProduct = params.idProduct;
  
    // useEffect(() => {
    //     getOneItemFromDatabase(idProduct).then((respuesta) => {
    //         setProduct(respuesta);
    //       });
    // },[]);

    useEffect(() => {
      const promesaItem = new Promise((resolve, reject) => {
        setTimeout(() => {
          let encontrado = pochis.find((item) => item.id === Number(idProduct));
          resolve(encontrado);
        }, 1000);
      });
  
      promesaItem.then((respuesta) => setProduct(respuesta));
    }, []);
    
  
      return (
    <>
        <div className="productos-content">
            <h2>{greeting}</h2>

            <ul className="item-list">
            <li className="item-card" key={product.id}>
            <img src={product.pictureUrl} alt={product.description} />
            <h2>{`${product.title}: ${product.detalle}`}</h2>
            <h3> $ {`${product.price}`} </h3>
            <h3> {`${product.category}`} </h3>
            
            <button>Agregar al carrito</button>
          </li>
        </ul>
        </div>
    </>

    );
} 

      export default ItemDetailContainer;
    