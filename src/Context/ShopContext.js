import { createContext, useState } from "react";
import { Books } from "../components/Books";

const getDafualtcart = () => {
  let cart = {};
  for (let i = 1; i < Books.length + 1; i++) {
    cart[i] = 0;
  }
  // console.log(cart);
  return cart;
};
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // const { size } = props;
  const [cartItems, setCartItems] = useState(getDafualtcart());
  const [cartInCount, setCartInCount] = useState(0);

  const cartItemCountU = () => {
    setCartInCount(cartInCount + 1);
  };
  const cartItemCountD = () => {
    setCartInCount(cartInCount - 1);
  };
  const cartItemCountAll = () => {
    setCartInCount(0);
  };

  const addToCart = (itemcode) => {
    setCartItems((prev) => ({ ...prev, [itemcode]: prev[itemcode] + 1 }));
    cartItemCountU();
  };

  //ADDING DIFFERENT FUNCTIONS

  const removeFromCart = (itemcode) => {
    setCartItems((prev) => ({ ...prev, [itemcode]: prev[itemcode] - 1 }));
    cartItemCountD();
  };
  const removeAllFromCart = (itemcode) => {
    setCartItems((prev) => getDafualtcart());
    cartItemCountAll();
  };
  const upDateCartItemCount = (newAmount, itemcode) => {
    setCartItems((prev) => ({ ...prev, [itemcode]: newAmount }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Books.find((book) => book.code === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const contextValue = {
    cartItems,
    cartInCount,
    addToCart,
    removeFromCart,
    upDateCartItemCount,
    getTotalCartAmount,
    removeAllFromCart,
    // cartItemCount,
  };
  // console.log(cartItemCount);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
