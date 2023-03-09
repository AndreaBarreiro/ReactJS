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


function ItemListContainer ({greeting}){
  const [products, setProducts] = useState([]);

  
  const {idCategory} = useParams();

  useEffect(() => {
     let promiseData = getItemsFromDatabase();

     promiseData
     .then ( (respuesta)=> {
      if(idCategory){
        setProducts(respuesta.filter((item) => item.category === idCategory))
      } else {
      setProducts(respuesta);
     }})
     .catch((error)=> alert(error));
     }, [idCategory]);

  

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