import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { PLUSN, MINUSN } from "./redux/modules/counter";
import { useState } from "react";

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
          dispatch(PLUSN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(MINUSN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
