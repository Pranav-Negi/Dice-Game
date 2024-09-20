import React, { useState } from "react";
import styled from "styled-components";

function Numberselectir(porps) {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <NumberContainer>
      <h3>{porps.error}</h3>
      <div className="flex">
        {arr.map((e, i) => {
          return (
            <Box
              isselect={e === porps.select}
              key={i}
              onClick={() => {
                return porps.setselect(e);
              }}
            >
              {e}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
}

export default Numberselectir;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
  h3 {
    color: red;
    font-weight: 400;
    padding: 10px;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    padding-top: 20px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(porps) => {
    return porps.isselect ? "black" : "white";
  }};
  color: ${(porps) => {
    return porps.isselect ? "White" : "black";
  }};
`;
