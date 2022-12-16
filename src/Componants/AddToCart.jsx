import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const AddToCart = ({ products }) => {
  const { id, stock, colors } = products;
  const [color, setColor] = useState(colors[0]);
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
                onClick={()=>{setColor(ele)}}
              >
                {ele === color ? <FiCheck className="checkicon" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <div className="cart-btn">
        <NavLink to=''></NavLink>
      </div>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
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
