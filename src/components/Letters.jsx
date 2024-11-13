import React from "react";

export const Letters = ({ word, guessedLetters }) => {
  return (
    <div className="flex text-3xl space-x-3">
      {word.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};
