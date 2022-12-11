const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
        return{
            ...state,
            isLoading :true
        }
      break;
    case "SET_API_DATA":
        const featureData = action.payload.filter((ele)=>{
            return ele.featured===true;
        })
        
        return{
            ...state,
            isLoading : false,
            products : action.payload,
            featuredProducts : featureData
        }
      break;
    case "API_ERROR":
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
      break;
    default:
      return {
        ...state,
      };
  }
  return state;
};
export default productReducer;
