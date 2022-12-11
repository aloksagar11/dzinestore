import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="container ">
        <div className="title text-center py-4">Trusted by 1000+ Companies</div>
        <div className="company-icons">
          <img src="./images/meesho.png" alt="" className="trusted" />
          <img src="./images/myntra_logo.png" alt="" className="trusted" />
          <img src="./images/xiaomi.png" alt="" className="trusted" />
          <img src="./images/oneplus.png" alt="" className="trusted" />
          <img src="./images/vivo_mobile_logo.png" alt="" className="trusted" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Trusted;
const Wrapper = styled.section`
  margin: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  height: 18rem;
  padding: 2rem 0;

  .title {
    font-size: 1.8rem;
    font-weight: 600;
    display: block;
  }

  .company-icons {
    display: grid;
    gap: 0 5rem;
    align-items: center;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
  }
  .trusted {
    width: 10rem;
    filter: grayscale(100%);
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }
  }
  @media (max-width: 786px) {
    .company-icons {
      grid-template-rows: auto;
    }
  }
`;
