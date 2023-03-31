import NavBar from ".//componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import CartContainer from "./componentes/CartContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/cartContext";
import { exportData } from "./Services/firestore";

function App() {
  return (
    <div className="container">

      <button onClick={exportData}>export data</button>
      
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Hola Pochitos!"} />}
            />

            <Route
              path="/detalle/:idProduct"
              element={<ItemDetailContainer />}
            />

            <Route
              path="/category/:idCategory"
              element={<ItemListContainer greeting={"Hola Pochitos!"} />}
            />

            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout/:id" element={<h3>Gracias por tu compra</h3>}/>
            
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
