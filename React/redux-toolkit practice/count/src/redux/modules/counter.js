import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, minusNumber } = countSlice.actions;

export default countSlice.reducer;
