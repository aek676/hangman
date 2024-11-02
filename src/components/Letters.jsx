import React from "react";

export const Letters = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};
