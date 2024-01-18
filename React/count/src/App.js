import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  return (
    <div>
      <div className="count">{count}</div>
      <div className="button">
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>
    </div>
  );
}

export default App;
