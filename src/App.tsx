import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die/Die";

interface diceObject {
  id: string;
  value: number;
  isHeld: boolean;
}

function App() {
  const [dice, setDice] = useState<diceObject[]>(() => generateNewRandomDice());

  function generateNewRandomDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice(generateNewRandomDice());
  }

  const diceElements = dice.map((die, i) => {
    return <Die key={die.id} value={die.value} className={i === dice.length - 1 ? true : false} />;
  });

  return (
    <main className="game-container">
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="game-action">
        Roll
      </button>
    </main>
  );
}

export default App;
