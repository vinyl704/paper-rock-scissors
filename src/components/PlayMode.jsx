import React from "react";

export default function PlayMode({ mode, setPlay }) {
  return (
    <div className="playSelect d-flex mx-auto p-1">
      <button
        className="btn btn-primary m-2"
        id="onePlayer"
        onClick={() => setPlay(1)}
      >
        1 Player
      </button>
      <button
        className="btn btn-primary m-2"
        id="twoPlayer"
        onClick={() => setPlay(2)}
      >
        2 Player
      </button>
    </div>
  );
}
