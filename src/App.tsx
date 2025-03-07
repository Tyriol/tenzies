import { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./App.css";
import Die from "./components/Die/Die";

interface diceObject {
  id: string;
  value: number;
  isHeld: boolean;
}

function App() {
  const [dice, setDice] = useState<diceObject[]>(() => generateNewRandomDice());

  const allDiceHeld = dice.every((die) => die.isHeld);
  const allDiceEqual = dice.every((die) => die.value === dice[0].value);
  const gameWon = allDiceHeld && allDiceEqual;
  gameWon && console.log("game won");

  function generateNewRandomDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        if (!die.isHeld) {
          return {
            ...die,
            value: Math.ceil(Math.random() * 6),
          };
        }
        return die;
      })
    );
  }

  function hold(id: string) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        }
        return die;
      })
    );
  }

  const diceElements = dice.map((die, i) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        lastElement={i === dice.length - 1 ? true : false}
        onClick={() => hold(die.id)}
      />
    );
  });

  return (
    <main className="game-container">
      {gameWon && <Confetti />}
      <h1>🎲 TENZIES 🎲</h1>
      <p>
        Roll all dice untill they are the same. Click each die to freeze it at that value between
        rolls
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="game-action">
        Roll
      </button>
    </main>
  );
}

export default App;
