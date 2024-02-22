import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAdd } from "./todolistSlice";
function TodoListUsingRedux() {
  const todos = useSelector((state) => state.todoListStore.todos);
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState("");
  const onInputChange = (e) => {
    setCurrentTodo(e.target.value);
  };
  const onAddTodo = () => {
    if (currentTodo !== "") {
      dispatch(onAdd(currentTodo));
      setCurrentTodo("");
    }
  };
  return (
    <div>
      <h1>TODO List</h1>
      <div className="form-row">
        <input
          value={currentTodo}
          onChange={onInputChange}
          name="todo"
          placeholder="Enter TODO"
        ></input>
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
export default TodoListUsingRedux;
