import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return <Wrapper>
    <NavLink to ="/">Home </NavLink> &gt; {title}
  </Wrapper>;
};

export default PageNavigation;

const Wrapper = styled.section`
    height: 5rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.6rem;
    padding-left: 3.2rem;
    /* background-color: ${({theme})=>theme.colors.bg}; */
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        display: none ;
        
    }

    
`;