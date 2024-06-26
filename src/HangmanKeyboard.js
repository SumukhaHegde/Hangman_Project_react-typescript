import React from "react";
import "./keyboard.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const HangmanKeyboard = ({
  setGuessedLetterByUser,
  activeLetters,
  inActiveLetters,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inActiveLetters.includes(key);
        return (
          <button
            className={`keyboard-btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            key={key}
            onClick={() => {
              setGuessedLetterByUser(key);
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
