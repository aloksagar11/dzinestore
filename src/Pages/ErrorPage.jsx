import React from "react";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  document.title ="Error 404";
  return (
    <Wrapper>
      <div className="container">
        <h1>404</h1>
        <h3>UH OH! You're Lost</h3>
        <p>
          This is page looking does not exist. How you got here is a mystery.
          But you can click on button below to go back to the Homepage.
        </p>
        <NavLink to="/">
          <Button>HOME</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
const Wrapper = styled.section`
  .container {
    padding: 5rem 0;
    display: flex;
    gap: 2rem 0;
    flex-direction: column;
    height: fit-content;
    text-align: center;
  }
`;
