import React from "react";
import Product from "../Componants/Product";
import { useProductContext } from "../ContextAPI/ContextData";

const Products = () => {
  document.title ="Products";
  const { isLoading, products } = useProductContext();
  if (isLoading) {
    return (
      <>
        <div className="container text-center">
          <h3>.......loading</h3>
        </div>
      </>
    );
  }
  return (

    <div className="container py-4">
      <p className="text-center h1">All Products</p>
      <div className="grid grid-three-column">
        {products.map((ele) => {
          return (
            <Product
              image={ele.image}
              id={ele.id}
              name={ele.name}
              price={ele.price}
              company={ele.company}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
