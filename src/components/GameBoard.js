import React, { useState, useEffect } from "react";
import "../styles/GameBoard.scss";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { checkouts } from "./Checkouts";
import logoBull from "../img/logo-bull.png";

const GameBoard = ({
  newGameIsVisible,
  selectValue,
  player1,
  player2,
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

  const [score180Player2, setScore180Player2] = useState(0);
  const [score160Player2, setScore160Player2] = useState(0);
  const [score140Player2, setScore140Player2] = useState(0);
  const [score120Player2, setScore120Player2] = useState(0);
  const [score100Player2, setScore100Player2] = useState(0);

  const [legsPlayer1, setLegsPlayer1] = useState(0);
  const [legsPlayer2, setLegsPlayer2] = useState(0);

  const [possibleCheckoutsPlayer1, setPossibleCheckoutsPlayer1] = useState("");
  const [possibleCheckoutsPlayer2, setPossibleCheckoutsPlayer2] = useState("");

  const [bullPlayer1Class, setBullPlayer1Class] = useState("");
  const [bullPlayer2Class, setBullPlayer2Class] = useState("hidden");

  useEffect(() => {
    // This check for every score update, then it calculates the possible checkout combo.
    getCheckouts(player1Score, setPossibleCheckoutsPlayer1);
  }, [player1Score]);

  useEffect(() => {
    // Same as above, for player 2.
    getCheckouts(player2Score, setPossibleCheckoutsPlayer2);
  }, [player2Score]);

  const getCheckouts = (score, setCheckouts) => {
    // This function set the possible checkout combos for both players.
    checkouts.map((e, index) => {
      if (Number(e[0]) == Number(score)) {
        setCheckouts(e[1][0]);
      }
    });
  };

  const getAverage = function (scoreHistory) {
    // This function return the average score of the player.
    if (scoreHistory.length >= 1) {
      return (
        scoreHistory.reduce((a, b) => Number(a) + Number(b)) /
        scoreHistory.length
      );
    } else return 0;
  };

  const handleAmounts1 = () => {
    // This function handles the amounts of the various score ranges for player 1.
    if (player1ScoreInput == 180) {
      setScore180Player1(score180Player1 + 1);
    }
    if (player1ScoreInput >= 160 && player1ScoreInput <= 179) {
      setScore160Player1(score160Player1 + 1);
    }
    if (player1ScoreInput >= 140 && player1ScoreInput <= 159) {
      setScore140Player1(score140Player1 + 1);
    }
    if (player1ScoreInput >= 120 && player1ScoreInput <= 139) {
      setScore120Player1(score120Player1 + 1);
    }
    if (player1ScoreInput >= 100 && player1ScoreInput <= 119) {
      setScore100Player1(score100Player1 + 1);
    }
  };

  const handleAmounts2 = () => {
    // This function handles the amounts of the various score ranges for player 2.
    if (player2ScoreInput == 180) {
      setScore180Player2(score180Player2 + 1);
    }
    if (player2ScoreInput >= 160 && player2ScoreInput <= 179) {
      setScore160Player2(score160Player2 + 1);
    }
    if (player2ScoreInput >= 140 && player2ScoreInput <= 159) {
      setScore140Player2(score140Player2 + 1);
    }
    if (player2ScoreInput >= 120 && player2ScoreInput <= 139) {
      setScore120Player2(score120Player2 + 1);
    }
    if (player2ScoreInput >= 100 && player2ScoreInput <= 119) {
      setScore100Player2(score100Player2 + 1);
    }
  };

  const handlePlayer1Change = () => {
    // This function contains the actions that needs to be performed in case of positive or negative score.
    // getCheckouts1(player1Score);
    setPlayer1ScoreHistory([player1ScoreInput, ...player1ScoreHistory]);
    setPlayer1Inactive("inactive");
    setPlayer2Inactive("");
    setInput1Hidden("hidden");
    setInput2Hidden("");
    setBullPlayer1Class("hidden");
    setBullPlayer2Class("");
  };

  const handlePlayer2Change = () => {
    // Same as above, but for player 2.
    setPlayer2ScoreHistory([player2ScoreInput, ...player2ScoreHistory]);
    setPlayer2Inactive("inactive");
    setPlayer1Inactive("");
    setInput2Hidden("hidden");
    setInput1Hidden("");
    setBullPlayer1Class("");
    setBullPlayer2Class("hidden");
  };

  const addScorePlayer1 = () => {
    if (isNaN(player1ScoreInput)) {
      setPlayer1Score(player1Score);
      alert("Score must be a number!");
    } else {
      handleAmounts1();
      if (player1ScoreInput <= player1Score) {
        handlePlayer1Change();
        setPlayer1Score(player1Score - player1ScoreInput);
      }
      if (player1ScoreInput >= player1Score) {
        setPlayer1Score(player1ScoreInput - player1Score);
        handlePlayer1Change();
      }
      if (player1ScoreInput == player1Score) {
        setPlayer1Score(selectValue);
        setPlayer2Score(selectValue);
      }
    }
  };

  const addScorePlayer2 = () => {
    if (isNaN(player2ScoreInput)) {
      setPlayer1Score(player2Score);
      alert("Score must be a number!");
    } else {
      handleAmounts2();
      if (player2ScoreInput <= player2Score) {
        setPlayer2Score(player2Score - player2ScoreInput);
        handlePlayer2Change();
      }
      if (player2ScoreInput >= player2Score) {
        setPlayer2Score(player2ScoreInput - player2Score);
        handlePlayer2Change();
      }
      if (player2ScoreInput == player2Score) {
        setPlayer1Score(selectValue);
        setPlayer2Score(selectValue);
      }
    }
  };

  return (
    <div className={`game-board ${newGameIsVisible}`}>
      <div className={`div1 ${player1Inactive}`}>
        <h1 className="points">{player1Score}</h1>
        <h3 className="player-name">{player1}</h3>
        <h4 className="legs-won">{`Legs: ${legsPlayer1}`}</h4>
        <p>{possibleCheckoutsPlayer1}</p>
      </div>
      <div className={`div2 ${player2Inactive}`}>
        <h1 className="points">{player2Score}</h1>
        <h3 className="player-name">{player2}</h3>
        <h4 className="legs-won">{`Legs: ${legsPlayer2}`}</h4>
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
        <div className="score-wrapper">
          <h4>{`Game Average: ${getAverage(player1ScoreHistory).toFixed(
            2
          )}`}</h4>
          <p></p>
          <h4>Amount:</h4>
          <p>{`180: ${score180Player1}`}</p>
          <p>{`160-179: ${score160Player1}`}</p>
          <p>{`140-159: ${score140Player1}`}</p>
          <p>{`120-139: ${score120Player1}`}</p>
          <p>{`100-119: ${score100Player1}`}</p>
        </div>
        <img
          src={logoBull}
          alt="bull logo"
          className={`logo-bull ${bullPlayer1Class}`}
        />
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
        <div className="score-wrapper">
          <h4>{`Game Average: ${getAverage(player2ScoreHistory).toFixed(
            2
          )}`}</h4>
          <p></p>
          <h4>Amount:</h4>
          <p>{`180: ${score180Player2}`}</p>
          <p>{`160-179: ${score160Player2}`}</p>
          <p>{`140-159: ${score140Player2}`}</p>
          <p>{`120-139: ${score120Player2}`}</p>
          <p>{`100-119: ${score100Player2}`}</p>
        </div>
        <img
          src={logoBull}
          alt="bull logo"
          className={`logo-bull ${bullPlayer2Class}`}
        />
      </div>
    </div>
  );
};

export default GameBoard;
