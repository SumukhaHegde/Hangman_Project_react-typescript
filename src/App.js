import { useState } from "react";
import "./App.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanText from "./HangmanText";
import words from "./wordsList.json";
import React from "react";

function App() {
  const [wordsToGuess, setWordsToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);

  const setGuessedLetterByUser = (newLetter) => {
    setGuessedLetters((prevState) => [...prevState, newLetter]);
  };

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordsToGuess.includes(letter)
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "800px",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h1>lose win</h1>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanText
        guessedLetters={guessedLetters}
        wordsToGuess={wordsToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard setGuessedLetterByUser={setGuessedLetterByUser} />
      </div>
    </div>
  );
}

export default App;
