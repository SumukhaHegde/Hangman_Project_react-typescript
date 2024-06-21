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
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
            width: "50px",
            textAlign: "center",
          }}
        >
          <span style={{ visibility: "hidden" }}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanText;
