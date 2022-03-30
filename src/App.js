import logo from "./logo.svg";
import "./App.css";

function App() {
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
          <span>(0)</span> 0
        </div>
        <div className="operators">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>

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
