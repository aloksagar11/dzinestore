import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();
const getCartData = () => {
  let cartData = localStorage.getItem("dzineCart");
  if (cartData == []) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};
const initialState = {
  cart: getCartData(),
  total_items: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("dzineCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
