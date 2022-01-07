import React, { useState } from "react";
import "../styles/GameBoard.scss";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const GameBoard = ({
  newGameIsVisible,
  player1,
  player2,
  player1Score,
  setPlayer1Score,
  player2Score,
  setPlayer2Score,
}) => {
  return (
    <div className={`game-board ${newGameIsVisible}`}>
      <div className="div1">
        <h1 className="points">{player1Score}</h1>
        <h4 className="player-name">{player1}</h4>
      </div>
      <div className="div2">
        <h1 className="points">{player2Score}</h1>
        <h4 className="player-name">{player2}</h4>
      </div>
      <div className="div3">
        <input type="text" placeholder={`Enter ${player1} score:`} />
        <ArrowCircleRightRoundedIcon className="btn-arrow" />
      </div>
      <div className="div4">
        <input type="text" placeholder={`Enter ${player2} score:`} />
        <ArrowCircleRightRoundedIcon className="btn-arrow" />
      </div>
      <div className="div5">
        <p>CIAO</p>
      </div>
      <div className="div6">
        <p>CIAO</p>
      </div>
      <div className="div7">
        <p>CIAO</p>
      </div>
      <div className="div8">
        <p>CIAO</p>
      </div>
    </div>
  );
};

export default GameBoard;
