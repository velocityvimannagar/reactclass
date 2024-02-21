import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
function CounterRedux() {
  const count = useSelector((state) => state.counterStore.counter);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };
  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>Count: {count}</div>
      <br></br>
      <div className="button-list">
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}
export default CounterRedux;
