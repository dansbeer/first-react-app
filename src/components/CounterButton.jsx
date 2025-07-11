import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function CounterButton() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <button
        onClick={handleMinus}
        style={{ marginRight: "10px" }}
        disabled={count === 0}
      >
        -
      </button>
      <CounterDisplay count={count} />
      <button
        onClick={handlePlus}
        style={{ marginLeft: "10px" }}
        disabled={count === 10}
      >
        +
      </button>
      <br />
      <button
        onClick={handleReset}
        style={{ marginTop: "10px" }}
        disabled={count === 0}
      >
        Reset !
      </button>
    </>
  );
}

export default CounterButton;
