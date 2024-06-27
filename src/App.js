import { useCallback, useEffect, useState } from "react";
import "./App.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanText from "./HangmanText";
import words from "./wordsList.json";
import React from "react";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordsToGuess, setWordsToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordsToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordsToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const setGuessedLetterByUser = useCallback(
    (newLetter) => {
      if (guessedLetters.includes(newLetter) || isLoser || isWinner) return;
      setGuessedLetters((prevState) => [...prevState, newLetter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handle = (e) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      setGuessedLetterByUser(key);
    };
    document.addEventListener("keypress", handle);

    return () => document.removeEventListener("keypress", handle);
  }, [guessedLetters]);

  useEffect(() => {
    const handle = (e) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setWordsToGuess(getWord());
      setGuessedLetters([]);
    };
    document.addEventListener("keypress", handle);

    return () => document.removeEventListener("keypress", handle);
  }, [guessedLetters]);
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
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "lighter",
          color: "red",
          textAlign: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        {isWinner && "Winner! - Refresh to play again"}
        {isLoser && "Loser! - Refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanText
        guessedLetters={guessedLetters}
        wordsToGuess={wordsToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordsToGuess.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          guessedLetters={guessedLetters}
          isguessedLetterLengthExceeds={isWinner || isLoser}
          setGuessedLetterByUser={setGuessedLetterByUser}
        />
      </div>
    </div>
  );
}

export default App;
