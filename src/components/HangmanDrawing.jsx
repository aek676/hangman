import React from "react";
import spriteData from "../assets/sprites.json";
import spriteSheet from "../assets/hangman-spritesheet.png";

export const HangmanDrawing = ({ errors, width, height }) => {
  const sprite = spriteData.find((s) => s.name === errors.toString());

  if (!sprite) {
    return <p>Sprite not found</p>;
  }

  const { x, y } = sprite;
  const spriteWidth = width || sprite.width;
  const spriteHeight = height || sprite.height;

  return (
    <div
      style={{
        width: `${spriteWidth}px`,
        height: `${spriteHeight}px`,
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: `-${x}px -${y}px`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
