import React from "react";
import "../App.css";
export default function Weapon(props) {
  const { weapon, play } = props;
  const rockPicUrl = (
    <p>
      <img
        className="weapon-pic"
        src="http://www.clker.com/cliparts/F/M/x/W/i/S/rock-rubble-hi.png"
        alt={weapon}
      />
    </p>
  );
  const ScissorsPicUrl = (
    <svg
      className="weapon-pic bi bi-scissors"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
    </svg>
  );
  const PaperPicUrl = (
    <p>
      <img
        className="weapon-pic"
        src="https://cdn.onlinewebfonts.com/svg/img_548933.png"
        alt={weapon}
      />
    </p>
  );
  const weaponPic = {
    rock: rockPicUrl,
    scissors: ScissorsPicUrl,
    paper: PaperPicUrl,
  };

  return (
    <div className="weapon" key={weapon} onClick={() => play(weapon)}>
      <h3>{weapon}</h3>
      {weaponPic[weapon]}
    </div>
  );
}
