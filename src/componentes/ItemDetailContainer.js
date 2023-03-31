import { useState, useEffect, useContext, getDoc, doc, collection, db } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import "./ItemDetailContainer.css";
import ItemCount from "./ItemCount";
import cartContext from "../Context/cartContext";
import Loader from "./folder";


async function getOneItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const pochisColectionRef = collection(db, "pochis");
  const docRef = doc(pochisColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") ;

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

function ItemDetailContainer (){

    const [product, setProduct] = useState({});

    const params = useParams();
    const idProduct = params.idProduct;


    useEffect(() => {
      getOneItemFromDatabase(idProduct)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(error));
    }, []);

    const { addItem } = useContext (cartContext);


    function onAddtoCart (count) {
      alert (`Agregaste ${count} items al carrito`);
      addItem (product, count);
    }

  //   //2. rendering condicional con return anticipado (early return)
  if (product.title === undefined) return <Loader />;
  
    
      return (
    <>
          <div className="card-detail">
            <div className="card-img" key={product.id}>
              <img src={product.pictureUrl} alt={product.description} />
            </div>

            <div>
              <h2>{product.title} {product.detalle}</h2>
              <h3> $ {product.price}</h3>
              <small> {product.category} </small>
            </div>

          <ItemCount
          onAddtoCart={onAddtoCart} initial={1} stock={product.stock}
          />
        </div>
      </>
    );
} 

      export default ItemDetailContainer;
    