import React from "react";
import FilterSection from "../Componants/FilterSection";
import GridView from "../Componants/GridView";
import ListView from "../Componants/ListView";
import { useFilterContext } from "../ContextAPI/FilterContext";

const ProductsList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView filter_products={filter_products} />;
  } else {
    return <ListView filter_products={filter_products} />;
  }
  
};

export default ProductsList;
