import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../ContextAPI/ContextData";
import PageNavigation from "../Componants/PageNavigation";
import styled from "styled-components";
const API_URL = "https://api.pujakaitem.com/api/products";
import Images from "../Componants/Images";
import FormatPrice from "../Helpers/FormatPrice";
const SingleProduct = () => {
  const { id } = useParams();
  const { isSingleLoading, singleProduct, getSingleProductData } =
    useProductContext();
  console.log(singleProduct);
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
    description
  } = singleProduct;

  useEffect(() => {
    getSingleProductData(`${API_URL}?id=${id}`);
  }, []);

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* Product images */}
          <div className="product-images">
            <Images imgs={image} />
          </div>
          {/* Product details */}
          <div className="product-details">
            <h3> {name}</h3>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
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
            <div className="product-services">

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.section`
  .container {
    width: 100%;
    padding: 0rem 12rem;
    .product-images {
    }
    .product-details {
      span {
        font-weight: bold;
      }
      .orignal-price{
        color : #860101;
        text-shadow: 2px 2px 4px gray;
      }
      .product-services{
        display: flex;
        justify-content: center;
      }
    }
  }
`;
