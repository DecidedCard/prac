import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { plusOne, minusOne } from "./redux/modules/counter";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div>현재카운트 : {counter.number}</div>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
