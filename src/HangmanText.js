import React from "react";

const HangmanText = () => {
  const text = "text";
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
      {text.split("").map((letter, index) => (
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
