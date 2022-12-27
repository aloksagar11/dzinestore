import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";
const Stars = ({ star, reviews }) => {
  // console.log(star, reviews);

  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {star >= index+1
          ? <AiFillStar className="icon"/>
          : star >= number
          ? <FaStarHalfAlt className="icon"/>
          : <AiOutlineStar className="icon"/>}
      </span>
    );
  });

  return (
    <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <p >{reviews} customers reviews</p>
        </div>
        
        
    </Wrapper>
  );
};

export default Stars;
 const Wrapper = styled.section`
    .icon-style{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.2rem;
        .icon{
            font-size: 2rem;
            color: orange;
            
        }
        .empty-icon{
            font-size: 2.2rem;

        }
        p{
            margin: 0;
            padding-left: 1.2rem;
        }
    }
 `