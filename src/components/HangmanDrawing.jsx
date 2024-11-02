import React from "react";

export const HangmanDrawing = ({ errors }) => {
  return (
    <div>
      <svg width="200" height="200">
        <line x1="50" y1="150" x2="150" y2="150" stroke="black" /> {/* Suelo */}
        <line x1="100" y1="150" x2="100" y2="50" stroke="black" /> {/* Poste */}
        <line x1="100" y1="50" x2="150" y2="50" stroke="black" /> {/* Techo */}
        {errors > 0 && (
          <circle cx="150" cy="70" r="20" stroke="black" fill="none" />
        )}{" "}
        {/* Cabeza */}
        {errors > 1 && (
          <line x1="150" y1="90" x2="150" y2="130" stroke="black" />
        )}{" "}
        {/* Cuerpo */}
        {errors > 2 && (
          <line x1="150" y1="110" x2="130" y2="100" stroke="black" />
        )}{" "}
        {/* Brazo Izquierdo */}
        {errors > 3 && (
          <line x1="150" y1="110" x2="170" y2="100" stroke="black" />
        )}{" "}
        {/* Brazo Derecho */}
        {errors > 4 && (
          <line x1="150" y1="130" x2="130" y2="150" stroke="black" />
        )}{" "}
        {/* Pierna Izquierda */}
        {errors > 5 && (
          <line x1="150" y1="130" x2="170" y2="150" stroke="black" />
        )}{" "}
        {/* Pierna Derecha */}
      </svg>
    </div>
  );
};
