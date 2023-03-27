import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (isInCart(item.id)) {
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      newCart[index].count = newCart[index].count + count;
    } else {
      newCart.push({ ...item, count });
    }
    setCart(newCart);
  }


  function removeItem(id) {}

  function clear() {}


  function getCountInCart() {
    let total = 0;
    cart.forEach((item) => total + item.count);
    return total;
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }
  return (
    <Provider
      value={{ 
        cart,
        addItem, 
        test: "ok", 
        isInCart, 
        removeItem,
        }}
    >
      {children}
    </Provider>
  );
}

export default cartContext;
