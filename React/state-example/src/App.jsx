import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>{number}</div>
      <button
        onClick={() => {
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);

          setNumber((num) => num + 1);
          setNumber((num) => num + 1);
          setNumber((num) => num + 1);
        }}
      >
        누르면 UP
      </button>
    </>
  );
}

export default App;
