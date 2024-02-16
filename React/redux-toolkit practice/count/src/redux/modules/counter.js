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

// 사용할 action을 바로 내보낼 수 있음.
export const { addNumber, minusNumber } = countSlice.actions;

export default countSlice.reducer;
