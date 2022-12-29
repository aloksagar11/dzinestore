const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find((ele) => ele.id == id + color);

    if (existingProduct) {
      let updatedProduct = state.cart.map((ele)=>{
        if(ele.id ==id+color)
        {
          let newAmount = ele.amount + amount;
          if(newAmount>product.stock)
          {
            newAmount=product.stock;
          }
          return {
            ...ele,
            amount : newAmount,
          }
        }
        else{
          return ele;
        }
      })

      return {
        ...state,
        cart : updatedProduct,
      }

    } 
    else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        price: product.price,
        image: product.image[0].url,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((ele) => ele.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default cartReducer;
