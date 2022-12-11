import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  font-size: 1.4rem ;
  font-weight: 600;
  background: rgb(255,0,0);
background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(166,0,0,1) 100%);
  color: rgb(255 255 255);
  padding:0.5rem 1.2rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1rem;
  }
`;
