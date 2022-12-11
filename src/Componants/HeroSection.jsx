import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const HeroSection = ({ name }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p>WELCOME TO</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              est laboriosam adipisci molestiae accusamus totam dolorum tempore
              ab iusto beatae illum repellat quisquam itaque iste harum
              voluptate enim, numquam sed.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="/shopping.jpg" alt="" className="image" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  padding: 7rem 0;

  img {
    width: 50rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px gray;
  }
`;
