import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
//   users,
// });
// const store = createStore(rootReducer);

//TODO : Redux Toolkit
const store = configureStore({
  reducer: {
    counter: counter,
  },
});
export default store;
