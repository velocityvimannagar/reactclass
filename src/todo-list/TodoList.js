import { useState } from "react";
import "./TodoList.css";
function TodoList() {
  const [todos, setTodos] = useState(["First Todo"]);
  const [currentTodo, setCurrentTodo] = useState("");
  const onInputChange = (e) =>{
    console.log("Event", e.target.value)
    setCurrentTodo(e.target.value)
  }
  const onAdd = () =>{
    if(currentTodo!==""){
        todos.push(currentTodo)
        setTodos([...todos])
        setCurrentTodo("")
    }
  }
  return (
    <div>
      <h1>TODO List</h1>
      <div className="form-row">
        <input value={currentTodo} onChange={onInputChange} name="todo" placeholder="Enter TODO"></input>
        <button onClick={onAdd}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
