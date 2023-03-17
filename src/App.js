import NavBar from ".//componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/cartContext";

//.....Config de firebase.............................................................................//

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCmCDIbpsOUXsrSGJPtGxtjmYozkunG5EI",
  authDomain: "react-barreiroandrea-39575.firebaseapp.com",
  projectId: "react-barreiroandrea-39575",
  storageBucket: "react-barreiroandrea-39575.appspot.com",
  messagingSenderId: "898912367205",
  appId: "1:898912367205:web:b6fb83f57e2b4867528c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//.....Config de firebase.............................................................................//


function App() {   
  return (
    <div className="container">

    <CartContextProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path= "/"
          element={< ItemListContainer greeting= {"Hola Pochitos!"} /> }
        />

        <Route path="/detalle/:idProduct" element={<ItemDetailContainer />}/>

        <Route
        path="/category/:idCategory" element= {<ItemListContainer greeting={"Hola Pochitos!"}/>} />  

        </Routes>
        </BrowserRouter> 
        </CartContextProvider>

      
    </div>

  );
}

export default App;
