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

const HangmanKeyboard = ({ setGuessedLetterByUser }) => {
  function handleClick(e) {
    console.log(e.target.textContent);
    setGuessedLetterByUser(e.target.textContent);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button
            className="keyboard-btn"
            key={key}
            onClick={(e) => {
              handleClick(e);
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
