import React from "react";

const HangmanText = () => {
  const text = ["t", "e", "x", "t"];
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {text.map((letter, index) => (
        <div
          key={index}
          style={{
            borderBottom: "10px solid black",
            width: "50px",
            textAlign: "center",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default HangmanText;
