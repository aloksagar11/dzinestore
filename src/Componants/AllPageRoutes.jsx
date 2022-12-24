import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Login from "../Pages/Login";
import SignUp from "../Pages/SingUp";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Pages/Cart";

import { GlobalStyle } from "../GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const AllPageRoutes = ({ Children }) => {
  const theme = {
    colors: {
      heading: "black",
      text: "black",
      bg: "#f3f2f2",
      black: "#000",
      darkRed :"#8a0909",
      white: "#fff",
      helper: "darkgray",
      border: "#e2e2e2",
      shadowSupport: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      btn: "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(166,0,0,1) 100%)",
    },
    media: {
      mobile: "786px",
      tab: "998px",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default AllPageRoutes;
