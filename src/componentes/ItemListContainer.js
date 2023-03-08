import { useEffect, useState} from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList"
import pochis from "../../src/products/products";
import { useParams } from "react-router-dom";


function getItemsFromDatabase () {
  return new Promise ( (resolve, rejet)=> {
    setTimeout(()=> {
    resolve (pochis);
  }, 2000)
  }) 
};

function getItemsByCategoryFromDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pochisFiltered = pochis.filter(
        (item) => item.category === categoryURL
      );
      resolve(pochisFiltered);
    }, 2000);
  });
}

function ItemListContainer ({greeting}){
  const [products, setProducts] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory;

  useEffect(() => {
     let promiseData = getItemsFromDatabase();

     promiseData
     .then ( (respuesta)=> {
      setProducts(respuesta);
     })
     .catch((error)=> alert(error));
     }, []);

  

    return (
      <>
      <h2>{greeting}</h2>
      <ItemList items = {products}/>
      </>
    );
}
          {/* <div className="container-item">
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
    } */}
    
    
    export default ItemListContainer;

    //deberia estar aca el MAP