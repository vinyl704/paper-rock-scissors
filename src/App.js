import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeaponSelect from "./components/WeaponSelect";
import Scoreboard from "./components/Scoreboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const weapons = 
    { "paper":"rock",
     "rock":"scissors" ,
    "scissors":"paper" }
  ;

 
  
  const [start, setStart] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const NUMBER_OF_ROUNDS = 5;

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
        weapons={weapons}

        
        setScore1 = {setScore1}
        setScore2 = {setScore2}
        score1 = {score1}
        score2 = {score2}
      />
      <div className="d-flex mt-5 justify-content-center align-items-center">
        <button className="btn btn-lg btn-success text-center">
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
