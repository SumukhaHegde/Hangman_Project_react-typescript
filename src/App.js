import "./App.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanText from "./HangmanText";

function App() {
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
      <div>
        <HangmanDrawing />
        <HangmanText />
        <HangmanKeyboard />
      </div>
    </div>
  );
}

export default App;
