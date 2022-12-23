import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import { Button } from '../Styles/Button';


const ListProduct = ({ data }) => {
    return (
        <div className="grid p-3 my-2 grid-two-column">
            <div className="product-image">
                <figure>
                    <img src={data.image} alt={data.name} />
                </figure>
            </div>
            <div className="description">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <h4><FormatPrice price ={data.price}/></h4>
                <NavLink to={`/products/${data.id}`}>
                    <Button >Read More</Button>
                </NavLink>
            </div>
        </div>
    )
}
export default function ListView({ filter_products }) {
    const data = filter_products[0];
    return (
        <Wrapper>
            {
                filter_products.map((data, index) => {
                    return (
                        <ListProduct key={index} data={data} />
                    )
                })
            }

        </Wrapper>
    )
}
const Wrapper = styled.section`
    .grid{transition: all 0.2s linear;
        border: none;
        justify-items: center;
        align-items: center;
    &:hover {
        border: 1px solid #810000;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }}
 .product-image{
    width: 80%;
    height: 20rem;
    background-size: cover;
   overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        transform: scale(1);
        &:hover{
            transform: scale(1);
            
        }
    }
}   
.description{
    h4{
        font-weight: 600;
        margin-bottom: 1rem;
    }
    h3{
        font-size: 2rem;
        font-weight: bold;}
        p{
            width: 100%;
            height: 8rem;
            overflow: hidden;
     text-overflow: ellipsis;
        }
}
`