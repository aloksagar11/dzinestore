import React from "react";
import styled from "styled-components";
import { useProductContext } from "../ContextAPI/ContextData";
import Product from "./Product";

const FeaturedSection = () => {
  const { isLoading, featuredProducts } = useProductContext();
  console.log(featuredProducts);
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
    <Wrapper className="section">
      <div className="container">
        <h3 >Check Now</h3>
        <h2>Featured Products</h2>
        <div className="grid grid-three-column py-4">
          {featuredProducts.map((ele) => {
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
    </Wrapper>
  );
};

export default FeaturedSection;

const Wrapper = styled.section`

  padding: 4rem 0;
  text-align: center;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    h3,h2{
        font-weight: 500;
    }
    h2{
        font-size:3rem ;
    }
    max-width: 120rem;
    .grid {
      justify-items: center;
    }
  }
`;
