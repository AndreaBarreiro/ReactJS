import React from "react";
import NavBar from ".//componentes/NavBar";
import ItemListContainer from ".//componentes/Item";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={"Hola Pochitos!"} />
    </div>
  );
}

export default App;
