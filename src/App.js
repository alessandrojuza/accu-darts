import "./App.scss";
import Header from "./components/Header";
import NewGame from "./components/NewGame";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-wrapper">
        <NewGame />
        <GameBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
