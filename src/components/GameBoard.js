import React, { useState } from "react";
import "../styles/GameBoard.scss";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { getCheckouts } from "./Checkouts";

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

  const [player1ScoreHistory, setPlayer1ScoreHistory] = useState([]);
  const [player2ScoreHistory, setPlayer2ScoreHistory] = useState([]);
  const [player1Inactive, setPlayer1Inactive] = useState("");
  const [player2Inactive, setPlayer2Inactive] = useState("inactive");
  const [input1Hidden, setInput1Hidden] = useState("");
  const [input2Hidden, setInput2Hidden] = useState("hidden");

  const [score180Player1, setScore180Player1] = useState(0);
  const [score160Player1, setScore160Player1] = useState(0);
  const [score140Player1, setScore140Player1] = useState(0);
  const [score120Player1, setScore120Player1] = useState(0);
  const [score100Player1, setScore100Player1] = useState(0);

  const [score180Player2, setScore180Player2] = useState([]);
  const [score160Player2, setScore160Player2] = useState([]);
  const [score140Player2, setScore140Player2] = useState([]);
  const [score120Player2, setScore120Player2] = useState([]);
  const [score100Player2, setScore100Player2] = useState([]);

  const [possibleCheckoutsPlayer1, setPossibleCheckoutsPlayer1] = useState("");
  const [possibleCheckoutsPlayer2, setPossibleCheckoutsPlayer2] = useState("");

  const getAverage = (scoreHistory) =>
    scoreHistory.reduce((a, b) => a + b) / scoreHistory.length;

  const addScorePlayer1 = () => {
    if (isNaN(player1ScoreInput)) setPlayer1Score(player1Score);
    else {
      if (player1ScoreInput <= player1Score) {
        setPossibleCheckoutsPlayer1(getCheckouts(player1Score));
        setPlayer1Score(player1Score - player1ScoreInput);
        setPlayer1ScoreHistory([player1ScoreInput, ...player1ScoreHistory]);
        setPlayer1Inactive("inactive");
        setPlayer2Inactive("");
        setInput1Hidden("hidden");
        setInput2Hidden("");
        setScore100Player1(score100Player1 + 1);
      } else {
        setPlayer1Score(player1ScoreInput - player1Score);
      }
    }
  };

  const addScorePlayer2 = () => {
    if (isNaN(player2ScoreInput)) setPlayer1Score(player2Score);
    else {
      if (player2ScoreInput <= player2Score) {
        setPossibleCheckoutsPlayer2(getCheckouts(player2Score));
        setPlayer2Score(player2Score - player2ScoreInput);
        setPlayer2ScoreHistory([player2ScoreInput, ...player2ScoreHistory]);
        setPlayer2Inactive("inactive");
        setPlayer1Inactive("");
        setInput2Hidden("hidden");
        setInput1Hidden("");
      } else {
        setPlayer2Score(player2ScoreInput - player2Score);
      }
    }
  };

  return (
    <div className={`game-board ${newGameIsVisible}`}>
      <div className={`div1 ${player1Inactive}`}>
        <h1 className="points">{player1Score}</h1>
        <h4 className="player-name">{player1}</h4>
        <p>{possibleCheckoutsPlayer1}</p>
      </div>
      <div className={`div2 ${player2Inactive}`}>
        <h1 className="points">{player2Score}</h1>
        <h4 className="player-name">{player2}</h4>
        <p>{possibleCheckoutsPlayer2}</p>
      </div>
      <div className="div3">
        <input
          type="text"
          placeholder={`Enter ${player1} score:`}
          onChange={(e) => {
            setPlayer1ScoreInput(e.target.value);
          }}
          className={input1Hidden}
        />
        <ArrowCircleRightRoundedIcon
          className={`btn-arrow ${input1Hidden}`}
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
          className={input2Hidden}
        />
        <ArrowCircleRightRoundedIcon
          className={`btn-arrow ${input2Hidden}`}
          onClick={addScorePlayer2}
        />
      </div>
      <div className={`div5 ${player1Inactive}`}>
        <h4>Game Average:</h4>
        <p></p>
        <h4>Amount:</h4>
        <p>{`180: ${score180Player1}`}</p>
        <p>{`160-179: ${score160Player1}`}</p>
        <p>{`140-159: ${score140Player1}`}</p>
        <p>{`120-139: ${score120Player1}`}</p>
        <p>{`100-119: ${score100Player1}`}</p>
      </div>
      <div className={`div6 ${player1Inactive}`}>
        <h4>Score History:</h4>

        {player1ScoreHistory.map((e) => {
          return <h4>{e}</h4>;
        })}
      </div>
      <div className={`div7 ${player2Inactive}`}>
        <h4>Score History:</h4>
        {player2ScoreHistory.map((e) => {
          return <h4>{e}</h4>;
        })}
      </div>
      <div className={`div8 ${player2Inactive}`}>
        <h4>Game Average:</h4>
        <p></p>
        <h4>Amount:</h4>
        <p>{`180: ${score180Player2}`}</p>
        <p>{`160-179: ${score160Player2}`}</p>
        <p>{`140-159: ${score140Player2}`}</p>
        <p>{`120-139: ${score120Player2}`}</p>
        <p>{`100-119: ${score100Player2}`}</p>
      </div>
    </div>
  );
};

export default GameBoard;
