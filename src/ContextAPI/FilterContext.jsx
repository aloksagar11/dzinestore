import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ContextData";
import reducer from '../Reducer/filterReducer';

const filterContext = createContext();

const initialState ={
    filter_products :[],
    all_products :[],
    grid_view:true,
    sorting_value :"lowest",
};


export const FilterContext = ({children})=>{
    const {products} = useProductContext();
    const [state,dispatch]= useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type:"SET_FILTER_DATA",payload : products});
    },[products])
    const setGridView=(value)=>{
        dispatch({type:"SET_GRIDVIEW",payload:value});
    }

    useEffect(()=>{
        dispatch({type: "SORTING_PRODUCTS"})


    },[state.sorting_value])
    

    const sorting =(event)=>{
        let sortValue = event.target.value;
        dispatch({type:"GET_SORT_VALUE" ,payload:sortValue})
    }

    return(
        <filterContext.Provider value = {{...state,setGridView,sorting}}>
            {children}
        </filterContext.Provider>
    )
}
export const useFilterContext =()=>{
    return useContext(filterContext);
}
