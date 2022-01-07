import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import NewGame from "./components/NewGame";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";

function App() {
  const [fadeOutClassNewGame, setFadeOutClassNewGame] = useState(false);
  const [newGameIsVisible, setNewGameIsVisible] = useState("hidden");
  const [selectValue, setSelectValue] = useState("501");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Score, setPlayer1Score] = useState(selectValue);
  const [player2Score, setPlayer2Score] = useState(selectValue);

  const launchGameBoard = () => {
    setFadeOutClassNewGame(true);
    setInterval(() => {
      setPlayer1Score(selectValue);
      setPlayer2Score(selectValue);
      setNewGameIsVisible("");
    }, 300);
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
          player2={player2}
          player1Score={player1Score}
          player2Score={player2Score}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
