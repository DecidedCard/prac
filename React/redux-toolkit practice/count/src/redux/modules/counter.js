import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2개의 INPUT
// (1) 이름 : 의미는 크게 없음
// (2) 함수
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

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
