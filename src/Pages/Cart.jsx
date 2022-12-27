import React from "react";
import styled from "styled-components";
import CartItem from "../Componants/CartItem";
import { useCartContext } from "../ContextAPI/CartContext";

const Cart = () => {
  const {cart} = useCartContext();
  // console.log(cart);
  document.title ="Cart";
  return <Wrapper>
    <div className="container">
      <div className="grid grid-five-column">
        <p>item</p>
        <p className="hide-item">Price</p>
        <p>Quantity</p>
        <p className="hide-item">SubTotal</p>
        <p>Remove</p>
      </div>
      <hr/>
      <div className="cart-item">
        {
          cart.map((ele)=>{
            return <CartItem key={ele.id} {...ele}/>
          })
        }
      </div>
    </div>
  </Wrapper>
};

export default Cart;
const Wrapper = styled.section`
    padding: 9rem 0;
   
  .grid{
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 2rem;
  }
  .cart-item{

    .item-image--name
    {
      .color-style{
        display: inline;
        border: none;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
      opacity: 1;
      }
    }
  }
  @media (max-width: ${({theme})=>theme.media.mobile}) {
    .grid-five-column{
      grid-template-columns: repeat(3,1fr);
      align-content: center;
    }
    .hide-item{
      display: none;
    }
    .item-image--name{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items:center;
    gap: 1rem;
    padding: 2rem 0;
    .image{
      width: 100%;
      max-width: 10rem;
    }
    }
    
  }
`