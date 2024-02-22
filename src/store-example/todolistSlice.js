import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "TodoList",
  initialState: {
    todos: ["First Todo"],
  },
  reducers: {
    onAdd: (state, data) => {
      console.log("OnAdd", data);
      state.todos.push(data.payload);
    },
  },
});

export const { onAdd } = todoListSlice.actions;

export const todoListReducer = todoListSlice.reducer;
