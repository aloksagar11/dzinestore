import React from "react";
import Button from "@mui/material/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const CartAmountTogglar = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <div className="counter py-4">
        <button className="mx-3" onClick={setDecrease}>
          <AiOutlineMinus className="icon" />
        </button>
        {amount}
        <button className="mx-3" onClick={setIncrease}>
          <AiOutlinePlus className="icon" />
        </button>
      </div>
    </Wrapper>
  );
};

export default CartAmountTogglar;
const Wrapper = styled.section`
  
  .counter,.icon,
  button {
    font-size: 2.4rem;
    font-weight: 700;
    color: #b90000;
    border: none;
  }
`;
