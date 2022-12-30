import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../ContextAPI/CartContext";

export default function NavBar() {
  const {total_items} = useCartContext();
  return (
    <Nav>
      <div className="navbar active">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolly--link">
              <FiShoppingCart className="cart-trolly" />
              <span className="cart-counter">{total_items}</span>
            </NavLink>
          </li>
        </ul>

        {/* <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
          />
        </div> */}
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 0 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        font-size: 1.4rem;
        display: inline-block;
        text-decoration: none;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: all 0.1s linear;
      }

      &:hover,
      &:active {
        font-weight: 700;
        color: rgb(197, 10, 10);
      }
    }
  }
  .mobile-nav-icon {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  /* .mobile-nav-icon[name="close-oultine"] {
    display: none;
  }
  .close-oultine {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
    }
    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .active .mobile-nav-icon {
    display: none;
    font-size: 4.2rem;
    top: 30%;
    right: 10%;
    color: ${({ theme }) => theme.colors.black};
    z-index: 9999;
  }
  .active .close-outline {
    display: inline-block;
  } */
  .cart-trolly--link {
    position: relative;

    .cart-trolly {
      position: relative;
      font-size: 2.4rem;
    }
    .cart-counter {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
`;
