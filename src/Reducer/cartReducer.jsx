const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    

    let cartProduct ={
        id : id+color,
        name : product.name,
        color,
        amount,
        price : product.price,
        image : product.image[0].url,
        max : product.stock
    }
    return {
        ...state,
        cart :[...state.cart, cartProduct]
    }
  }
  return state;
};

export default cartReducer;
