import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/user";

const rootReducer = combineReducers({
  counter,
  users,
});
const store = createStore(rootReducer);

export default store;
