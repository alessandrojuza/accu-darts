import React, { useState } from "react";
import "../styles/GameBoard.scss";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const GameBoard = ({
  newGameIsVisible,
  player1,
  setPlayer1,
  player2,
  setPlayer2,
  player1Score,
  setPlayer1Score,
  player2Score,
  setPlayer2Score,
}) => {
  const [player1ScoreInput, setPlayer1ScoreInput] = useState("");
  const [player2ScoreInput, setPlayer2ScoreInput] = useState("");

  const addScorePlayer1 = () => {
    if (isNaN(player1ScoreInput)) setPlayer1Score(player1Score);
    else {
      setPlayer1Score(player1Score - player1ScoreInput);
    }
  };

  const addScorePlayer2 = () => {
    if (isNaN(player2ScoreInput)) setPlayer1Score(player2Score);
    else {
      setPlayer2Score(player2Score - player2ScoreInput);
    }
  };

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
        <input
          type="text"
          placeholder={`Enter ${player1} score:`}
          onChange={(e) => {
            setPlayer1ScoreInput(e.target.value);
          }}
        />
        <ArrowCircleRightRoundedIcon
          className="btn-arrow"
          onClick={addScorePlayer1}
        />
      </div>
      <div className="div4">
        <input
          type="text"
          placeholder={`Enter ${player2} score:`}
          onChange={(e) => {
            setPlayer2ScoreInput(e.target.value);
          }}
        />
        <ArrowCircleRightRoundedIcon
          className="btn-arrow"
          onClick={addScorePlayer2}
        />
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
