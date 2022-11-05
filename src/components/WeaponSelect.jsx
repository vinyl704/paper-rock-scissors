import Weapon from "./Weapon";
import { useEffect, useState } from "react";

export default function WeaponSelect(props) {
  const {
    setChoiceOutput,
    choiceOutput,
    setScore1,
    setScore2,
    score1,
    score2,
    activePlayer,
    setActivePlayer,
    gameLength,
  } = props;

  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);

  const weapons = { paper: "rock", rock: "scissors", scissors: "paper" };

  const gameOver = score1 === gameLength || score2 === gameLength;
  useEffect(() => {
    if (playerOneChoice && playerTwoChoice) {
      if (!gameOver) {
        if (playerTwoChoice === weapons[playerOneChoice]) {
          setScore1((prevScore) => prevScore + 1);
          if (score1 !== gameLength)
            setChoiceOutput(
              `Player one wins!  Player One chose ${playerOneChoice}, Player two chose ${playerTwoChoice}`
            );
        } else if (playerOneChoice === weapons[playerTwoChoice]) {
          setScore2((prevScore) => prevScore + 1);
          if (score2 !== gameLength)
            setChoiceOutput(
              `Player two wins!  Player Two chose ${playerTwoChoice}, Player one chose ${playerOneChoice}`
            );
        } else if (playerOneChoice === playerTwoChoice)
          setChoiceOutput("Draw, try again to crush your opponent");
        else {
          return "";
        }
      }

      setPlayerOneChoice(null);
      setPlayerTwoChoice(null);
    }
    if (score1 === gameLength || score2 === gameLength)
      setChoiceOutput(
        score1 === gameLength
          ? "Player One Wins, better luck next time scrub!!!"
          : "Player Two Wins, better luck next time scrub!!!"
      );
  });

  const play = (weapon) => {
    if (score1 < gameLength && score2 < gameLength) {
      //console.log(weapon)

      if (activePlayer === 2) {
        setPlayerTwoChoice(weapon);
        setActivePlayer(1);
      } else if (activePlayer === 1) {
        //console.log(weapon)
        setPlayerOneChoice(weapon);
        setActivePlayer(2);
      }
    }
  };
  return (
    <>
      {!gameOver && (
        <div className="player-display text-center">
          Player{" "}
          <span className={activePlayer === 1 ? "text-warning" : "text-danger"}>
            {activePlayer}
          </span>
          , choose your weapon
        </div>
      )}
      <div className="text-center bold">{choiceOutput}</div>
      <div id="weaponSelect">
        {Object.keys(weapons).map((item) => (
          <Weapon
            play={play}
            key={item}
            weapon={item}
            setPlayerOneChoice={setPlayerOneChoice}
            setPlayerTwoChoice={setPlayerTwoChoice}
            choose={activePlayer}
          />
        ))}
      </div>
      {props.children}
    </>
  );
}
