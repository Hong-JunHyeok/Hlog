import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  number: number;
}
const initialState: CounterState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.number = state.number + 1;
    },
    decrement: (state) => {
      state.number = state.number - 1;
    },
  },
  extraReducers: {},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
