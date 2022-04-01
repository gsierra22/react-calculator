import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState(""); //sets the calculation
  const [result, setResult] = useState(""); //saves result

  const operators = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1))) //checks if previous input is operator
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString()); //eval checks number input
    }
  };

  const createDigits = () => {
    //function to create buttons for numbers
    const digits = []; //1-9

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculator = () => {
    setCalc(eval(calc).toString());
  }; //programs equal button

  const deleteFunc = () => {
    if (calc === "") {
      return;
    } //delete button to remove last number

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clear = () => {
    setCalc("");
    setResult("");
  }; //clears entire calculator

  return (
    <div className="welcome">
      <span1> Math is Fun! </span1>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ""}
            {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("/")}>/</button>

            <button onClick={deleteFunc}>Delete</button>
          </div>
          <div className="numbers">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculator}>=</button>
          </div>
          <div className="clear">
            <button onClick={clear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
