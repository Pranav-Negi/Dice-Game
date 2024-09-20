import React, { useState } from "react";
import styled from "styled-components";

function Rolldics(porps) {
  return (
    <Dicecontainer>
      <div
        className="Dice"
        onClick={() => {
          porps.rolldice();
        }}
      >
        <img src={`/images/dice_${porps.currentdice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </Dicecontainer>
  );
}

export default Rolldics;

const Dicecontainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .Dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
