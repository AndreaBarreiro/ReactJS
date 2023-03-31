import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
// import pochis from "../../src/products/products";
import { useParams } from "react-router-dom";
import Loader from "./folder";
import {  addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Services/firestore";

// function getItemsFromDatabase () {
//   return new Promise ( (resolve, rejet)=> {
//     setTimeout(()=> {
//     resolve (pochis);
//   }, 2000)
//   })
// };

async function getItemsFromDatabase() {
  const pochisColectionRef = collection(db, "pochis");
  let snapshotProducts = await getDocs(pochisColectionRef);
  const documents = snapshotProducts.docs;
  const dataPochis = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataPochis;
}

async function getItemsByCategoryFromDatabase(categoryURL) {

  const pochisColectionRef = collection(db, "pochis");
  const q = query(pochisColectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  
  const documents = snapshotProducts.docs;
  const dataPochis = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataPochis;
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await getItemsFromDatabase();
      setProducts(respuesta);
      setIsLoading(false);
    } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory);
      setProducts(respuesta);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {isLoading ? <Loader color="#E29140" /> : <ItemList products={products} />}
    </div>
  );
}

//   return (
//     <>
//       <h2>{greeting}</h2>
//       <ItemList items={products} />
//     </>
//   );
// }
// {}
/* <div className="container-item">
          {
            cargandoItems ?
          <h5>...cargando Pochiproductos...</h5>
          :

        <div className='productos-container'>
          <ItemList prod = { items }/>
        </div>
          }
        </div>
      );
    } */

export default ItemListContainer;
