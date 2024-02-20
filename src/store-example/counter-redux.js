import { useState } from "react";
import "./Counter.css";
import { useSelector } from "react-redux";
function CounterRedux() {
  const count = useSelector((state) => state.counterStore.counter);

  return (
    <div>
      <div>Count: {count}</div>
      <br></br>
      <div className="button-list"></div>
    </div>
  );
}
export default CounterRedux;
