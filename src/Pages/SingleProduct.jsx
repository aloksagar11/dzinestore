import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../ContextAPI/ContextData";
import PageNavigation from "../Componants/PageNavigation";
import styled from "styled-components";
const API_URL = "https://api.pujakaitem.com/api/products";
import MyImages from "../Componants/MyImages";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "../Helpers/Stars";
import AddToCart from "../Componants/AddToCart";

import {
  MdAdd,
  MdAddCircleOutline,
  MdDelete,
  MdOutlineSecurity,
} from "react-icons/md";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { isSingleLoading, singleProduct, getSingleProductData } =
    useProductContext();
  // console.log(singleProduct);
  const {
    id: alias,
    name,
    price,
    company,
    category,
    reviews,
    stars,
    stock,
    image,
    colors,
    description,
  } = singleProduct;

  useEffect(() => {
    getSingleProductData(`${API_URL}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return <p className="loading">Loading Data ......</p>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* Product images */}
          <div className="product-images">
            <MyImages imgs={image} />
          </div>
          {/* Product details */}
          <div className="product-details">
            <p className="product-name"> {name}</p>
            
              <Stars star ={stars} reviews = {reviews}/>
              {/* {stars} Stars ({reviews} reviews) */}
            
            <p>
              MRP :{" "}
              <span>
                <del> {<FormatPrice price={price + 250000} />}</del>
              </span>
            </p>
            <p className="orignal-price">
              Deal of the Day : <span> {<FormatPrice price={price} />}</span>
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Day Replacement</p>
              </div>

              <div className="warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fast Delivery</p>
              </div>

              <div className="warranty-data">
                <MdOutlineSecurity className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
            </div>

            <p>
              Available :{" "}
              <span>{stock > 0 ? "In Stock" : "Not  Available"}</span>
            </p>
            <p>
              {" "}
              ID : <span>{id}</span>
            </p>
            <p>
              {" "}
              Brand : <span>{company}</span>
            </p>
            <hr />
            {stock>0 && <AddToCart product = {singleProduct}/> }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.section`
  transition: all 0.2s linear;
  .container {
    width: 100%;
    padding-bottom: 4rem;
    .product-images {
    }
    .product-details {
      .product-name {
        font-size: 2.8rem;
        text-transform: capitalize;
        text-shadow: 1px 1px 2px gray;
      }
      span {
        font-weight: bold;
      }
      .orignal-price {
        color: #860101;
        font-size: 2rem;
        text-shadow: 2px 2px 2px #7771717d;
      }
      .product-data-warranty {
        display: flex;
        width: 100%;
        align-items: center;
        border-bottom: 1px solid #a70303;
        margin-bottom: 1rem;
        justify-content: space-around;
        .cart-add {
          font-size: 2rem;
        }
        .warranty-data {
          text-align: center;
          .warranty-icon {
            /* width: 4rem;
            height: 4rem; */
            font-size: 4rem;
            padding: 0.5rem;
            color: white;
            background-color: #a70303;
            border-radius: 50%;

            transition: all 0.2s linear;
            &:hover {
              transform: scale(0.9);
            }
          }
          p {
            margin-top: 0.5rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
