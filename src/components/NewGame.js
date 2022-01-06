import React, { useState } from "react";
import "../styles/NewGame.scss";
import logoblue from "../img/logo-blue.png";
import FadeIn from "react-fade-in";
import { Animate } from "react-simple-animate";
import GameBoard from "./GameBoard";

const NewGame = () => {
  const [fadeOutClass, setFadeOutClass] = useState(false);
  const [highlightClass, setHighlightClass] = useState("");

  const startFadeOut = () => {
    setFadeOutClass(true);
  };

  const launchGameBoard = () => {
    setFadeOutClass(true);
    setInterval(() => {
      return <GameBoard />;
    }, 600);
  };

  return (
    <Animate
      play={fadeOutClass}
      start={{ opacity: 1, filter: "blur(0)" }}
      end={{ opacity: 0, filter: "blur(10px)" }}
    >
      <FadeIn transitionDuration="1000">
        <div className="new-game">
          <FadeIn transitionDuration="1000" delay="500">
            <img src={logoblue} alt="logo" className="logo-blue" />
          </FadeIn>
          <h3>START A NEW GAME:</h3>
          <div className="game-type-wrapper">
            <p>Game type:</p>
            <select name="cars" id="cars" defaultValue="501">
              <option value="101">101</option>
              <option value="301">301</option>
              <option value="501">501</option>
            </select>
          </div>
          <div className="player-name-wrapper">
            <p>Player 1 Name:</p>
            <input type="text" />
          </div>
          <div className="player-name-wrapper">
            <p>Player 2 Name:</p>
            <input type="text" />
          </div>
          <button onClick={launchGameBoard}>LET'S GET STARTED!</button>
        </div>
      </FadeIn>
    </Animate>
  );
};

export default NewGame;
