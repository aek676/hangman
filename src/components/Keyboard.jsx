import React from "react";

export const Keyboard = ({
  guessedLetters,
  setGuessedLetters,
  word,
  mistakes,
  setMistakes,
  isGameDone,
}) => {
  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  return (
    <div>
      {Array.from(Array(26)).map((_, index) => (
        <button
          key={index}
          onClick={() => handleGuess(String.fromCharCode(65 + index))}
          disabled={
            guessedLetters.includes(String.fromCharCode(65 + index)) ||
            isGameDone.isGameWon ||
            isGameDone.isGameLost
          }
        >
          {String.fromCharCode(65 + index)}
        </button>
      ))}
    </div>
  );
};
