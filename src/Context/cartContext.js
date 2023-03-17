import { createContext, useState } from "react";


const cartContext = createContext({
  cart: [],
});


function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(product, count) {
    const newCart = [...cart];

    product.count = count;
    newCart.push(product);
    

    setCart(newCart);
  }

  function removeItem(id) {
    
  }

  function clear() {

  }

  function getCountInCart() {
    let total = 0;
    cart.forEach((item) => total + item.count);
    return total;
  }

  return (
    
    <cartContext.Provider value={{ cart, addItem }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };

export default cartContext;