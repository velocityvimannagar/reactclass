import { useState } from "react";
import "./App.css";
import UseEffectHookDemo from "./UseEffectHook/UseEffectHookDemo";
import UserProfile from "./UserProfile";
import CommunicationDemo from "./communication/CommunicationDemo";
import Counter from "./counter/Counter";
import FormExample from "./forms-example/FormExample";
import LoopingExample from "./looping-example/LoopingExample";
import ObjectExample from "./object-example/ObjectExample";
import RandomCounter from "./randomcounter/RandomCounter";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import TodoList from "./todo-list/TodoList";
import UserCrud from "./user-crud/UserCrud";
import ImageCarasoul from "./image-carasoul/ImageCarasoul";
import CountryList from "./countries-list/CountryList";

function App() {
  const getRandom = () => {
    return Math.floor(Math.random() * 100);
  };
  const [parentState, setParentState] = useState(getRandom());

  const runMe = (data) => {
    alert("Parent component run");
  };
  return (
    <div className="root-div">
      {/* <Counter></Counter> */}
      {/* <RandomCounter></RandomCounter> */}
      {/* <LoopingExample></LoopingExample> */}
      {/* <ObjectExample></ObjectExample> */}
      {/* <TodoList></TodoList> */}
      {/* <UserCrud> </UserCrud> */}
      {/* <TicTacToe></TicTacToe> */}
      {/* <FormExample></FormExample> */}
      {/* <CommunicationDemo name="John" age={25} onSomeAction={runMe}></CommunicationDemo> */}
      {/* <UseEffectHookDemo randomValue={parentState}></UseEffectHookDemo>
      <button
        onClick={() => {
          setParentState(getRandom());
        }}
      >
        Change parent state
      </button> */}
      {/* <ImageCarasoul></ImageCarasoul> */}
      <CountryList></CountryList>
    </div>
  );
}
export default App;
