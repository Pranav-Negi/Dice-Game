import React from "react";
import styled from "styled-components";

const Score = (props) => {
  return (
    <Scorecounter>
      <h1>{props.sccr}</h1>
      <p>Total Score</p>
    </Scorecounter>
  );
};

export default Score;
const Scorecounter = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
    margin: 0px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
