import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <Rulescontainer>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </Rulescontainer>
  );
};

export default Rules;

const Rulescontainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #fbf1f1;
  max-width: 794px;
  padding: 15px;
  margin-top: 10px;
  h2 {
    padding: 10px 0px;
  }
`;
