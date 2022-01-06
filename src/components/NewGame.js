import React from "react";
import "../styles/NewGame.scss";
import logoblue from "../img/logo-blue.png";

const NewGame = () => {
  return (
    <div className="new-game">
      <img src={logoblue} alt="logo" className="logo-blue" />
      <h3>START A NEW GAME</h3>
      <div className="game-type-wrapper">
        <p>Game type:</p>
        <div className="game-type-numbers">
          <h4>101</h4>
          <h4>301</h4>
          <h4>501</h4>
        </div>
      </div>
      <div className="player-name-wrapper">
        <p>Player 1 Name:</p>
        <input type="text" />
      </div>
      <div className="player-name-wrapper">
        <p>Player 2 Name:</p>
        <input type="text" />
      </div>
      <button>LET'S GET STARTED!</button>
    </div>
  );
};

export default NewGame;
