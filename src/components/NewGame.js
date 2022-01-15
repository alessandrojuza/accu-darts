import React, { useState } from "react";
import "../styles/NewGame.scss";
import logoblue from "../img/logo-blue.png";
import FadeIn from "react-fade-in";
import { Animate } from "react-simple-animate";

const NewGame = ({
  fadeOutClassNewGame,
  launchGameBoard,
  setSelectValue,
  setPlayer1,
  setPlayer2,
}) => {
  const [newGameDisplay, setNewGameDisplay] = useState("");

  return (
    <Animate
      className="animate"
      play={fadeOutClassNewGame}
      start={{ opacity: 1, filter: "blur(0)" }}
      end={{ opacity: 0, filter: "blur(10px)" }}
    >
      <FadeIn transitionDuration="1000" className="fade-in">
        <div className={`new-game ${newGameDisplay}`}>
          <FadeIn transitionDuration="1000" delay="500">
            <img src={logoblue} alt="logo" className="logo-blue" />
          </FadeIn>
          <h3>START A NEW GAME:</h3>
          <div className="game-and-leg-wrapper">
            <div className="game-type-wrapper">
              <p>Game type:</p>
              <select
                name="cars"
                id="cars"
                defaultValue="501"
                onChange={(e) => {
                  setSelectValue(e.target.value);
                }}
              >
                {/* <option value="101">101</option> */}
                <option value="301">301</option>
                <option value="501">501</option>
              </select>
            </div>
          </div>
          <div className="player-name-wrapper">
            <p>Player 1 Name:</p>
            <input
              type="text"
              onChange={(e) => {
                setPlayer1(e.target.value);
              }}
            />
          </div>
          <div className="player-name-wrapper">
            <p>Player 2 Name:</p>
            <input
              type="text"
              onChange={(e) => {
                setPlayer2(e.target.value);
              }}
            />
          </div>
          <button onClick={launchGameBoard}>LET'S GET STARTED!</button>
        </div>
      </FadeIn>
    </Animate>
  );
};

export default NewGame;
