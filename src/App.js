import styled from "styled-components";
import Home from "./Components/Home";
import Gameplay from "./Components/Gameplay";
import { useState } from "react";

function App() {
  const [Gamestart, setGamestart] = useState(false);

  const togglegame = () => {
    setGamestart((prev) => !prev);
  };

  return <>{Gamestart ? <Gameplay /> : <Home toggle={togglegame} />}</>;
}

export default App;
