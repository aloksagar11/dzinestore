import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import CartAmountTogglar from "./CartAmountTogglar";
import {Button} from '../Styles/Button'
import { useCartContext } from "../ContextAPI/CartContext";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(colors[0]);

  const {addToCart} =useCartContext();

  const setdecrease = ()=>{
    amount>1?setAmount(amount-1) : setAmount(1);
  }
  const setincrease = ()=>{
    stock>amount?setAmount(amount+1)  : setAmount(stock);
  }
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors :
          {colors.map((ele, index) => {
            return (
              <button
                key={index}
                className={ele === color ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: ele }}
                onClick={() => {
                  setColor(ele);
                }}
              >
                {ele === color ? <FiCheck className="checkicon" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountTogglar
        amount={amount}
        setDecrease={setdecrease}
        setIncrease={setincrease}
      />
      <div className="cart-btn mx-3">
        <NavLink to="/cart" onClick={()=>addToCart(id,color,amount,product)}>
          <Button>Add To Cart</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .colors {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    .btnStyle {
      border: none;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .active {
      opacity: 1;
    }
    .checkicon {
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;
