import React from "react";

const HangmanText = ({ guessedLetters, wordsToGuess, reveal = false }) => {
  const guessedLetter = guessedLetters;
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        textTransform: "uppercase",
      }}
    >
      {wordsToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
            width: "50px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
              color: guessedLetter.includes(letter) ? "black" : "red",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanText;
