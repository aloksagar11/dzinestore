import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const Product = (props) => {
  // console.log(props);
  const { id, image, name, price,company } = props;
  return (
    <NavLink to={`/products/${id}`}>
      <Wrapper>
        <div className="product-card">
          <div className="product-image">

          <span className="company">{company}</span>
          <img src={image} alt="" />
          </div>
          <div className="d-flex justify-content-between p-3 text-dark">
            <span >{name}</span>
            <span className="price"><FormatPrice price={price}/></span>
          </div>
        </div>
      </Wrapper>
    </NavLink>
  );
};

export default Product;
const Wrapper = styled.section`
  .product-card {
    background-color: white;
    border-radius: 1.5rem;
    padding: 1.5rem;
    width: 25rem;
    span{
      font-size: 1.4rem;
    }
    .price{
      color:#b41010;
    }
    height: 22rem;
    .product-image{
      overflow: hidden;
      border-radius: 0.5rem;
      img {
        width: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1);
        }
      }
      .company{
        font-size: 1.2rem;
        border: none;
        text-transform: capitalize;
        color: black;
        padding: 3px 10px;
        position: absolute;
        border-radius: 1.5rem;
        background: #f1f0f0;
        z-index: 2;
        display: block;
        margin:1.2rem;
        }
    }
  }
`;
