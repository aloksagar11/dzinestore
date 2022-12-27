import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountTogglar from "./CartAmountTogglar";
import {MdDelete} from 'react-icons/md'
import { useCartContext } from "../ContextAPI/CartContext";
const CartItem = ({ id, name, color, amount, price, image }) => {

    const {removeItem} = useCartContext();
  const setdecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setincrease = () => {
    stock > amount ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <Wrapper className="grid grid-five-column">
      <div className="item-image--name">
        <div className="image">
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="name-color">
          <p>{name}</p>
          <p>
            Color :
            <button
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></button>
          </p>
        </div>
      </div>
      <div className="hide-item">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <div>
        <CartAmountTogglar
          amount={amount}
          setDecrease={setdecrease}
          setIncrease={setincrease}
        />
      </div>
      <div className="hide-item">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <button className="delete" onClick={()=>{removeItem(id)}}>
        <MdDelete className = "icon"/>
        </button>
      </div>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  .item-image--name {
    display: grid;
    width: 100%;
    grid-template-columns: 0.5fr 0.5fr;
    gap: 1rem;
    justify-items: center;
    align-items: center;
    padding: 2rem 0;
    .image {
      width: 100%;
      align-items: center;
      margin: auto 0;
      img {
        width: 100%;
      }
    }
    .name-color {
      display: flex;
      flex-direction: column;
      p {
        margin: 0;
      }
    }
  }
  .delete
  {
    border: none;
    background: none;
    color: #a70303;
    font-size: 2.4rem;
  }
`;
