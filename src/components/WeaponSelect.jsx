import Weapon from "./Weapon";
import {useState} from "react";

export default function WeaponSelect(props) {
  const {
    weapons,
    setScore1,
    setScore2,
    score1,
    score2,
  } = props;
  //console.log(weapons)
  const [playerOneChoice, setPlayerOneChoice] = useState('');
  const [playerTwoChoice, setPlayerTwoChoice] = useState('');
  const [activePlayer, setActivePlayer] = useState(1);

  let play = (weapon) => {
    
    if(score1<5 && score2<5){
  
    //console.log(weapon)
    if (activePlayer === 1) {
        //console.log(weapon)
        setPlayerOneChoice(()=>weapon);
        setActivePlayer(2)
    } 
    
    if (activePlayer === 2) {
        //console.log(weapon)
        setPlayerTwoChoice(weapon);
        console.log(playerOneChoice,playerTwoChoice)
        if (playerTwoChoice === weapons[playerOneChoice]) {
            setScore1(()=>score1 + 1);
            setActivePlayer(1)
        } else if(playerOneChoice === weapons[playerTwoChoice]){
            setScore2(()=>score2 + 1);
            setActivePlayer(1)
        }
  
    };
}

}
  return (
    <div id="weaponSelect">
      {Object.keys(weapons).map((item) => (
        <Weapon key={item} weapon={item} setPlayerOneChoice={setPlayerOneChoice} setPlayerTwoChoice={setPlayerTwoChoice} choose={play} />
      ))}
    </div>
  );
}
