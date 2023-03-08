import NavBar from ".//componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {   
  return (
    <div className="container">

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path= "/"
          element={< ItemListContainer greeting= {"Hola Pochitos!"} /> }
        />

        <Route path="/detalle/:idItems" element={<ItemDetailContainer />}/>

        <Route
        path="/category/:idCategory" element= {<ItemListContainer greeting={"Hola Pochitos!"}/>} />  

        </Routes>
        </BrowserRouter> 
      
      
    </div>

  );
}

export default App;
