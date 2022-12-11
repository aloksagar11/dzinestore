import React, { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../Reducer/productReducer";
import { useContext } from "react";

const MyContext = createContext();
const API_URL = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const ContextData = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProductsData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const mydata = await axios.get(url);
      const products = await mydata.data;
      console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({type:"API_ERROR"}); 
    }
  };

  useEffect(() => {
    getProductsData(API_URL);
  }, []);
  return (
    <MyContext.Provider value={{ ...state }}>{children}</MyContext.Provider>
  );
};
const useProductContext = ()=>{
  return useContext(MyContext);
}

export { ContextData,useProductContext };
