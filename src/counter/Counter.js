import { useState } from "react";
import "./Counter.css";
function Counter() {
  
  let [count, setCount]  = useState(0);

  const onIncrement = () => {
    setCount(count+=1);
    // alert("Button Clicked: " + count);
  };
  const onDecrement = () => {
    setCount(count-=1);
    // alert("Button Clicked: " + count);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <br></br>
      <div className="button-list">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
}
export default Counter;
