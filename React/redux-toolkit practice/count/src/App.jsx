import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { __addNumber, __minusNumber } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);

  // 여기에서 store에 접근하여, counter의 값을 읽어옴
  // useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });

  // dispatch
  const dispatch = useDispatch();

  return (
    <>
      <div>현재카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            setNumber(+event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // dispatch(addNumber(number));
          dispatch(__addNumber(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(__minusNumber(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
