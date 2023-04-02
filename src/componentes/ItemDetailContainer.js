import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import "./ItemDetailContainer.css";
import ItemCount from "./ItemCount";
import cartContext from "../Context/cartContext";
import Loader from "./folder";
import { db } from "../Services/firestore"
import { getDoc, doc, collection } from "firebase/firestore";


async function getOneItemFromDatabase(idItem) {
  
  const pochisColectionRef = collection(db, "pochis");
  const docRef = doc(pochisColectionRef, idItem);

  
  const docSnapshot = await getDoc(docRef);

  
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
      // swal('Agregaste ${count} items al carrito');
      addItem (product, count);
    }

  if (product.title === undefined) return <Loader />;
  
    
      return (
    <>
          <div className="card-detail">
            <div className="card-img" key={product.id}>
              <img src={product.pictureUrl} alt={product.description} />
            </div>

            <div>
              <h2>{product.title} <br></br>{product.detalle}</h2>
              <h3> $ {product.price}</h3>
              <h5 style={{fontSize: "2rem"}} > {product.category} </h5>
            </div>

          <ItemCount
          onAddtoCart={onAddtoCart} initial={0} stock={product.stock}
          />
        </div>
      </>
    );
} 

      export default ItemDetailContainer;
    