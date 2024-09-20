import React from "react";
import styled from "styled-components";

const Home = (prop) => {
  return (
    <>
      <Container>
        <img src="/images/dices.png" alt="" />
        <div className="content">
          <h1>DICE GAME </h1>
          <Button onClick={prop.toggle}>Start Game</Button>
        </div>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1180;
  display: flex;
  height: 100vh;

  .content {
    padding-top: 200px;
    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  border-radius: 5px;
  color: white;
  width: 220px;
  height: 44px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 18px;
  border: 1px solid transparent;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: white;
    color: black;
    font-weight: 600;
    border: 1px solid black;
    transition: 0.3s all ease-in;
    cursor: pointer;
  }
`;
