import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
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
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
