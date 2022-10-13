import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeaponSelect from "./components/WeaponSelect";
import Scoreboard from "./components/Scoreboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


 

  
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const[choiceOutput,setChoiceOutput] = useState('')
  const [activePlayer, setActivePlayer] = useState(1);


  const resetHandler = () =>{
    setScore1(0)
    setScore2(0)
    setChoiceOutput(null)
    setActivePlayer(1)
  }
  // //gameloop
  // const startGame = (e)=>{
  //   e.preventDefault()
  //   //setStart(true)
  // }
    
  //  // while(score1 < NUMBER_OF_ROUNDS && score2 < NUMBER_OF_ROUNDS) {
  //     weapons[playerOneChoice] === playerTwoChoice
  //     ? setScore1(score1 + 1)
  //     : setScore2(score2 + 1);
  //  // }

  return (
    <div className="App">
      <Header />
      <Scoreboard score1={score1} score2={score2}/>
      <WeaponSelect
        setScore1 = {setScore1}
        setScore2 = {setScore2}
        score1 = {score1}
        score2 = {score2}
        choiceOutput={choiceOutput}
        setChoiceOutput = {setChoiceOutput}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      >
      <div className="d-flex mt-5 justify-content-center align-items-center">
        <button id="reset" className="btn btn-lg text-center" onClick={resetHandler}>
          Reset
        </button>
      </div>
      </WeaponSelect>
    </div>
  );
}

export default App;
