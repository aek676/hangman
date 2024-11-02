import { useState } from "react";
import { Letters } from "./Letters";
import { Keyboard } from "./Keyboard";
import { HangmanDrawing } from "./HangmanDrawing";
import { usePalabraAleatoria } from "../hooks/usePalabraAleatoria";

export const HangmanGame = () => {
  const { word, setWord } = usePalabraAleatoria();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  console.log(word);

  const isGameWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  const isGameLost = () => {
    return mistakes >= 7;
  };

  const resetGame = () => {
    setWord("");
    setGuessedLetters([]);
    setMistakes(0);
  };

  const status = {
    isGameWon: isGameWon(),
    isGameLost: isGameLost(),
  };

  return (
    <div>
      <h1>HangMan</h1>
      <HangmanDrawing errors={mistakes} />
      <Letters word={word} guessedLetters={guessedLetters} />
      <Keyboard
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        word={word}
        mistakes={mistakes}
        setMistakes={setMistakes}
        isGameDone={status}
      />
      <div>
        <p>{isGameWon() ? "Has ganado" : isGameLost() ? "Has perdido" : ""}</p>
      </div>
      <div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};
