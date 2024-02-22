import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { todoListReducer } from "./todolistSlice";

export default configureStore({
  reducer: {
    counterStore: counterReducer,
    todoListStore: todoListReducer,
  },
});
