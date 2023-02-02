import React, { useState } from "react";
import "../styles/CounterFunc.css";
const CounterFunc = () => {
  let [counter, counterChange] = useState(0); //get counter value and function to change this value reactive

  function increment() {
    counterChange(counter + 1);
  }
  function decrement() {
    counterChange(counter - 1);
  }

  return (
    <div className="counter-func">
      <h2 className="counter-func__title">func likes {counter}</h2>
      <div className="counter-func__buttons">
        <button className="counter-func__button" onClick={increment}>
          +
        </button>{" "}
        <button className="counter-func__button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default CounterFunc;
