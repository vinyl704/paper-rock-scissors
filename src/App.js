import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeaponSelect from "./components/WeaponSelect";
import Scoreboard from "./components/Scoreboard";
import GameLength from "./components/GameLength";
import PlayMode from "./components/PlayMode";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [choiceOutput, setChoiceOutput] = useState("");
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameRounds, setGameRounds] = useState(5);
  const [mode, setMode] = useState(1);

  const resetHandler = () => {
    setScore1(0);
    setScore2(0);
    setChoiceOutput(null);
    setActivePlayer(1);
    setGameRounds(5);
    setMode(1)
  };

  return (
    <div className="App">
      <Header />
      <h3 className="text-center">First to {gameRounds}</h3>
      <h4 className="text-center">
        {mode === 1 ? "Player vs CPU" : "Player vs Player"}
      </h4>
      <Scoreboard score1={score1} score2={score2} />
      <WeaponSelect
        setScore1={setScore1}
        setScore2={setScore2}
        score1={score1}
        score2={score2}
        choiceOutput={choiceOutput}
        setChoiceOutput={setChoiceOutput}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        gameLength={gameRounds}
        mode={mode}
      >
        <div className="d-flex mt-5 justify-content-center align-items-center">
          <button
            id="reset"
            className="btn btn-lg text-center"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
        <div className="d-flex mt-2 justify-content-center align-items-center">
          {score1 === 0 && score2 === 0 && activePlayer === 1 && (
            <div className="d-flex flex-column">
              <GameLength
                gameLength={gameRounds}
                setGameLength={setGameRounds}
              />
              <PlayMode setPlay={setMode} mode={mode} />
            </div>
          )}
        </div>
      </WeaponSelect>
    </div>
  );
}

export default App;
