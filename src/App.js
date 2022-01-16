import React, { useState } from "react";
import "./App.scss";
import "./styles/Queries.scss";
import Header from "./components/Header";
import NewGame from "./components/NewGame";
import GameBoard from "./components/GameBoard";

function App() {
  const [fadeOutClassNewGame, setFadeOutClassNewGame] = useState(false);
  const [newGameIsVisible, setNewGameIsVisible] = useState("hidden");
  const [selectValue, setSelectValue] = useState(501);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Score, setPlayer1Score] = useState("");
  const [player2Score, setPlayer2Score] = useState("");

  const launchGameBoard = () => {
    if (player1 === "" || player2 === "") alert("Player field can't be empty.");
    else {
      setFadeOutClassNewGame(true);
      setTimeout(() => {
        setPlayer1Score(selectValue);
        setPlayer2Score(selectValue);
        setNewGameIsVisible("");
      }, 300);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="game-wrapper">
        <NewGame
          launchGameBoard={launchGameBoard}
          fadeOutClassNewGame={fadeOutClassNewGame}
          setFadeOutClassNewGame={setFadeOutClassNewGame}
          setSelectValue={setSelectValue}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />

        <GameBoard
          newGameIsVisible={newGameIsVisible}
          setNewGameIsVisible={newGameIsVisible}
          selectValue={selectValue}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          player1Score={player1Score}
          setPlayer1Score={setPlayer1Score}
          player2Score={player2Score}
          setPlayer2Score={setPlayer2Score}
        />
      </div>
    </div>
  );
}

export default App;
