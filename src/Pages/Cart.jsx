import React from "react";
import styled from "styled-components";
import CartItem from "../Componants/CartItem";
import { useCartContext } from "../ContextAPI/CartContext";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  // console.log(cart);
  document.title = "Cart";
  if (cart.length==0) {
    return (
      <Empty className="empty-cart">
        <h2>Opps!!!!</h2>
        <p>
          Your Cart is Empty. Just go to{" "}
          <NavLink to="/products">Products Page</NavLink> and shop somthing.
        </p>
        <p>Have a Good day </p>
        <NavLink to="/products">
          <Button>Shop Now</Button>
        </NavLink>
      </Empty>
    );
  } else
    return (
      <Wrapper>
        <div className="container">
          <div className="grid grid-five-column">
            <p>Item</p>
            <p className="hide-item">Price</p>
            <p>Quantity</p>
            <p className="hide-item">SubTotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((ele) => {
              return <CartItem key={ele.id} {...ele} />;
            })}
          </div>
          <hr />
          <div className="two-btn">
            <NavLink to="/products">
              <Button>Contiue Shopping</Button>
            </NavLink>

            <Button onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      </Wrapper>
    );
};

export default Cart;
const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 100rem;
    hr {
      background: #a30c0c;
      height: 0.2rem;
      border: none;
    }
  }

  .grid {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 2rem;
  }
  .two-btn {
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
  }
  .cart-item {
    .item-image--name {
      .color-style {
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
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: repeat(3, 1fr);
      align-content: center;
    }
    .hide-item {
      display: none;
    }
    .item-image--name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 2rem 0;
      .image {
        width: 100%;
        max-width: 10rem;
      }
    }
  }
`;

const Empty = styled.div`
  padding: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* justify-items: center; */
  align-items: center;
`;
