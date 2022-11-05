import React from "react";
import { useEffect } from "react";

export default function GameLength(props) {
  const { gameLength, setGameLength } = props;
  const handleChange = (e) => {
    if (e.target.value !== gameLength) {
      setGameLength((prev) => e.target.value);
    }
  };
  return (
    <select
      className="form-select-lg"
      onChange={handleChange}
      value={gameLength}
    >
      <option value="1">1</option>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="7">7</option>
      <option value="10">10</option>
    </select>
  );
}
