import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ContextData";
import reducer from "../Reducer/filterReducer";

const filterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category:"All",
    company :"All",
    color:"All"
  },
};

export const FilterContext = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);


//   to set filter data
  useEffect(() => {
    dispatch({ type: "SET_FILTER_DATA", payload: products });
  }, [products]);



//   to set grid value true or false
  const setGridView = (value) => {
    dispatch({ type: "SET_GRIDVIEW", payload: value });
  };


  useEffect(() => {
    dispatch({type:"UPDATE_FILTER_DATA"});
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value,state.filters]);

  
//   change filter value from form
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch({type:"UPDATE_FILTER_VALUE", payload:{name,value}})
  };

  const sorting = (event) => {
    let sortValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
  };

  return (
    <filterContext.Provider
      value={{ ...state, setGridView, sorting, updateFilterValue }}
    >
      {children}
    </filterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(filterContext);
};
