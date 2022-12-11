import React, { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";

const MyContext = createContext();
const API_URL = "https://api.pujakaitem.com/api/products";
const ContextData = ({ children }) => {
  const getProductsData = async (url) => {
    const mydata = await axios.get(url);
    // const pData = await fetch(url);
    // const mydata = await pData.json();
    console.log(mydata);
  };
  useEffect(() => {
    getProductsData(API_URL);
  }, []);
  const name = "Alok Sagar";
  return <MyContext.Provider value={{ name }}>{children}</MyContext.Provider>;
};

export { ContextData, MyContext };
