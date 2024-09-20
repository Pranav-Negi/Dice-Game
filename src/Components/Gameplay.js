import React, { useState } from "react";
import Score from "./Score.js";
import Numberselectir from "./Numberselectir.js";
import styled from "styled-components";
import Rolldics from "./Rolldics.js";
import Rules from "./Rules.js";

function Gameplay() {
  const [score, setsocre] = useState(0);
  const [select, setselect] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");
  const [rules, setrules] = useState(false);

  const genrandom = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    if (!select) {
      seterror("You have not selected any number");
      return;
    } else {
      seterror("");

      const radnomnumber = genrandom(1, 7);
      setcurrentdice(radnomnumber);

      if (select === radnomnumber) {
        setsocre((prev) => prev + radnomnumber);
      } else {
        setsocre((prev) => prev - 2);
      }
      setselect(undefined);
    }
  };

  return (
    <Maincontainer>
      <div className="top_container">
        <Score sccr={score} />
        <Numberselectir select={select} setselect={setselect} error={error} />
      </div>
      <Rolldics currentdice={currentdice} rolldice={rolldice} />
      <Button className="btns">
        <button onClick={() => setsocre(0)}>Reset Score</button>
        <button onClick={() => setrules(!rules)}>
          {`${!rules ? "Show " : "Hide "}`}Rules
        </button>
      </Button>
      {rules && <Rules />}
    </Maincontainer>
  );
}

export default Gameplay;

const Maincontainer = styled.div`
  .top_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
  }
`;

const Button = styled.div`
  button {
    background-color: black;
    border-radius: 5px;
    color: white;
    width: 220px;
    height: 44px;
    font-weight: 600;
    font-size: 20px;
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
  }

  :first-child {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
