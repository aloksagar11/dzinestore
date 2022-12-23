import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const CartAmount = ({counter,increment,decrement }) => {
    
  
    return (
        <Wrapper >
            <button onClick={decrement}>
                <AiOutlineMinus className="icon" />
            </button>
            <p className="counter"> {counter}</p>
            <button onClick={increment}>
                <AiOutlinePlus className="icon" />
            </button>
        </Wrapper>
    )
}

export default CartAmount

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;   
    padding-bottom: 1rem;
    gap: 2rem;
    .icon,counter{
      font-size: 2rem;
    }
    .counter{
      color:#000;
      font-size: 1.5rem;
    }


    
`