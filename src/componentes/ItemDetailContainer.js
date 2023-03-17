import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import pochis from "../../src/products/products";
import "./ItemListContainer.css";
import "./ItemDetailContainer.css";
import ItemCount from "./ItemCount";
import cartContext from "../Context/cartContext";
import Loader from "./folder";


function getOneItemFromDatabase(idItem) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = pochis.find((item) => item.id === Number(idItem));
        resolve(encontrado);
      }, 2000);
    });
  }


function ItemDetailContainer (){

    const [product, setProduct] = useState({});

    const params = useParams();
    const idProduct = params.idProduct;
  
    useEffect(() => {
        getOneItemFromDatabase(idProduct).then((respuesta) => {
            setProduct(respuesta);
          });
    },[]);

    useEffect(() => {
      getOneItemFromDatabase(idProduct)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(error));
    }, []);

    const { addItem } = useContext (cartContext);


    function onAddtoCart (count) {
      console.log(count)
      // alert ("Agregaste ${count} al carrito");
      addItem (product, count);
    }

  //   //2. rendering condicional con return anticipado (early return)
  if (product.title === undefined) return <Loader />;
  
    
      return (
    <>
        <div className="productos-content">
            {/* <h2>{greeting}</h2> */}

            <ul className="item-list">
            <li className="item-card" key={product.id}>
            <img src={product.pictureUrl} alt={product.description} />
            <h2>{`${product.title}: ${product.detalle}`}</h2>
            <h3> $ {`${product.price}`} </h3>
            <h3> {`${product.category}`} </h3>

          {<ItemCount
          onAddtoCart={onAddtoCart}
          initial={1}
          stock={product.stock}
          />}

          </li>
        </ul>
        </div>
      </>
    );
} 

      export default ItemDetailContainer;
    