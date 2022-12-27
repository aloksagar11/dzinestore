import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../ContextAPI/FilterContext";
import FilterSection from "../Componants/FilterSection";
import ProductsList from "../Componants/ProductsList";
import Sort from "../Componants/Sort";


const Products = () => {
  document.title = "Products";
  

  const { filter_products,setGridView } = useFilterContext();
  return (
    <Wrapper>

      <div className="container-sm grid py-4 grid-layout">
        <div className="filtersection">
          <FilterSection />

        </div>

        <div className="">
          <div className="sort">
            <Sort/>          
          </div>          
          <ProductsList/>
        </div>
      </div>
    </Wrapper>

  );
};

export default Products;

const Wrapper = styled.section`
margin-top: 3rem;

  
  .grid-layout{
    grid-template-columns: 0.3fr 1fr;
  }

  .grid-three-column{
    gap: 2rem;
  }
  .icon{
    font-size: 2rem;
    cursor: pointer;
    border: 1px solid #ad0303;
    color: #ad0303;
    
  }
`