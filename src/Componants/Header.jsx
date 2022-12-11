import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/logo.png" className="logo" alt="DzineStore Logo" />
      </NavLink>
      <NavBar />
      <NavLink to="/login">
        <Button>Login</Button>
      </NavLink>
    </MainHeader>
  );
}
const MainHeader = styled.header`
  padding: 0 5rem 0 3rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
