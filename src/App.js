import "./App.css";
import UserProfile from "./UserProfile";
import Counter from "./counter/Counter";
import LoopingExample from "./looping-example/LoopingExample";
import ObjectExample from "./object-example/ObjectExample";
import RandomCounter from "./randomcounter/RandomCounter";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import TodoList from "./todo-list/TodoList";
import UserCrud from "./user-crud/UserCrud";

function App() {
  return (
    <div className="root-div">
      {/* <Counter></Counter> */}
      {/* <RandomCounter></RandomCounter> */}
      {/* <LoopingExample></LoopingExample> */}
      {/* <ObjectExample></ObjectExample> */}
      {/* <TodoList></TodoList> */}
      {/* <UserCrud> </UserCrud> */}
      <TicTacToe></TicTacToe>
    </div>
  );
}
export default App;
