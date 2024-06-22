import React from "react";

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "130px",
      right: 0,
      rotate: "30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "130px",
      right: "-70px",
      rotate: "-30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "210px",
      right: "-70px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const HangmanDrawing = ({ numberOfGuesses }) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          border: "10px solid black",
          position: "absolute",
          top: "50px",
          right: "-30px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "50px",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          width: "120px",
          height: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "350px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{ width: "250px", height: "10px", backgroundColor: "black" }}
      />
    </div>
  );
};

export default HangmanDrawing;
