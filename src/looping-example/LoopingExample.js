import { useState } from "react";

function LoopingExample() {
  let [arr, setArr] = useState([1,2,3,4,5])
  const addNewItem = () =>{
    const newRandomvalue = Math.floor(Math.random()*100);
    arr.push(newRandomvalue)
    setArr([...arr])
  }
  return (
    <div>
      <h1>Looping Example</h1>
      <ul>
        {arr.map((item, index) => {
          return <li key={item}>{index==3?"I am Special":item}</li>;
        })}
        
        {/* <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
            <li>Six</li>
            <li>Seven</li>
            <li>Eight</li>
            <li>Nine</li>
            <li>Ten</li> */}
      </ul>

      <button onClick={addNewItem}>Add new</button>
    </div>
  );
}
export default LoopingExample;
