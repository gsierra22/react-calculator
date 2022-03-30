import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    setCalc(calc + value);
  };
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }

    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>(0)</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>

          <button>Delete</button>
        </div>
        <div className="numbers">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
