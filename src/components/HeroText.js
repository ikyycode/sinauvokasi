import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Belajar apapun yang berkaitan di Vokasi</h5>
      <h1>Tau Aja Dulu,</h1>
      <h1>Jago Mah</h1>
      <h1>Belakangan</h1>

      <BtnContainer>
        <button className="readmore">Read More</button>
        <button>Lesgoo Brother!</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #f74348;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #f74348;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
  .readmore {
    color: #f74348;
    background: transparent;
    border: 3px solid #f74348;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
