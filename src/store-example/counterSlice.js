import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, data) => {
      console.log("Incrementing the count");
      state.counter = state.counter + 1;
    },
    decrement: (state, data) => {
      console.log("Decrementing the count");
      state.counter = state.counter - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
