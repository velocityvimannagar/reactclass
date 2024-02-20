import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, payload) => {
      console.log("state", state);
      state.counter = state.counter + 1;
    },
    decrement: (state, payload) => {
      state.counter = state.counter + 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
