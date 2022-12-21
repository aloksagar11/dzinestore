import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ContextData";
import reducer from '../Reducer/filterReducer';

const filterContext = createContext();

const initialState ={
    filter_products :[],
    all_products :[]
};


export const FilterContext = ({children})=>{
    const {products} = useProductContext();
    const [state,dispatch]= useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type:"SET_FILTER_DATA",payload : products});
    },[products])

    return(
        <filterContext.Provider value = {{...state}}>
            {children}
        </filterContext.Provider>
    )
}
export const useFilterContext =()=>{
    return useContext(filterContext);
}
