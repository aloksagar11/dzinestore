import React from "react";
import Button from "@mui/material/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const CartAmountTogglar = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <div className="counter py-4">
        <Button className="mx-3" variant="outlined" onClick={setDecrease}>
          {" "}
          <AiOutlineMinus className="icon" />{" "}
        </Button>
        {amount}
        <Button className="mx-3" variant="outlined" onClick={setIncrease}>
        <AiOutlinePlus className="icon"/>
        </Button>
      </div>
    </Wrapper>
  );
};

export default CartAmountTogglar;
const Wrapper = styled.section`

    font-size:2.4rem;
    .icon,Button{
      font-size: 2.4rem;
      color:#b90000;
      border-color: #b90000 ;
    }
    
`