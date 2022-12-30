const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    // if(state.cart.length!==0)
    // {
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

     // } 
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

  if(action.type==="SET_DECREMENT"){
    let updatedProduct = state.cart.map((ele)=>{
      if(ele.id===action.payload){
        let decAmount= ele.amount;
        decAmount>1?decAmount-=1:decAmount=1;
        return{
          ...ele,
          amount : decAmount,
        };
      }
      else{
        return ele;
      }
    })
    return{
      ...state,
      cart : updatedProduct
    }
    
  }
  if(action.type==="SET_INCREMENT"){
    let updatedProduct = state.cart.map((ele)=>{
      if(ele.id===action.payload){
        let incAmount= ele.amount;
        incAmount<ele.max?incAmount+=1:incAmount=ele.max;
        return{
          ...ele,
          amount : incAmount,
        };
      }
      else{
        return ele;
      }
    })
    return{
      ...state,
      cart : updatedProduct
    } 
  }

  if(action.type==="SET_TOTAL_ITEMS")
  {
    let total =0;
    let subTotal=0;
    state.cart.map((ele)=>{
      total=ele.amount+total;
      subTotal+=(ele.amount*ele.price);
    })
    return{
      ...state,
      total_items: total,
      total_amount : subTotal,
    }
  }
  return state;
};

export default cartReducer;
