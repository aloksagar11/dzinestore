import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container grid grid-four-column">
        <div>
          <NavLink to="/">
            <img src="/logoiconwhite.png" alt="" className="logoicon" />
            <h3 className="title">Dzine Store</h3>
          </NavLink>
          <br />
          <br />
          <h3 className="text-center">About US</h3>
        </div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
      <hr className="line" />
      <div className="container-fluid">
        <div className="container">
          <h3 className="text-center py-4">
            Copyright All Rights Reserved @
            <NavLink className="title" to="/">
              dzinesore
            </NavLink>
          </h3>
          <br />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  position: relative;
  padding-top: 3rem;

  color: white;
  background: rgb(255, 0, 0);
  background: radial-gradient(
    circle,
    rgba(255, 0, 0, 1) 0%,
    rgba(166, 0, 0, 1) 100%
  );
  height: fit-content + calc(10rem);
  .logoicon {
    width: 12rem;
    display: inline-block;
    text-align: left;
  }
  .line {
    width: 90%;
    color: white;

    margin: auto;
  }
  .title {
    text-decoration: none;
    color: white;
    text-align: left;
  }
`;
