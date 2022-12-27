import React from "react";
import styled from "styled-components";

const CartItem = ({ id, name, color, amount, price, image }) => {
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
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  .item-image--name {
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    gap: 1rem;
    padding: 2rem 0;
    .image {
      width: 5rem;
      align-items: center;
      margin: auto 0;
      img {
        width: 100%;
      }
    }
    .name-color {
      display: flex;
      flex-direction: column;
      p{
        margin: 0;
      }      
    }
  }
`;
