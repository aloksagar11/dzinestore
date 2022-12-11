import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill, RiHandCoinLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="service">
          <TbTruckDelivery className="icon" />
          Fast and Safe Delivery
        </div>
        <div>
          <div className="service1 text-center">
            <MdSecurity className="icon" /> Non Contact Delivery
          </div>
          <div className="service1 text-center">
            <RiHandCoinLine className="icon" /> Non Contact Delivery
          </div>
        </div>
        <div className="service">
          <RiSecurePaymentFill className="icon" />
          Super and Secure Payment
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  .container {
    max-width: 120rem;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 2rem;
  }
  .service {
    height: 20rem;
    width: 30rem;
    border-radius: 1rem;
    padding-top: 6rem;
    font-size: 1.4rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .service1 {
    height: 9rem;
    width: 30rem;
    border-radius: 1rem;
    padding-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: 700;
    justify-content: center;
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .service2 {
    height: 9rem;
    width: 30rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .icon {
    width: 4rem;
    height: 4rem;
    margin: auto;
    position: relative;
    background-color: #c20404;
    color: #a70303;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: "786px") {
    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;
