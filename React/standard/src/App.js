import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermaelon",
    "grape",
  ];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";
    array.forEach((fruits) => {
      tempResult += `${fruits}, `;
    });

    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter((fruits) => {
      if (fruits.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    const upper = array.map((i) => {
      return i.toUpperCase();
    });
    setResult(upper.join(", "));
  };

  const handleReduce = () => {
    const reduceedListText = array.reduce((acc, cur) => {
      return `${acc}, ${cur}`;
    });
    setResult(reduceedListText);
  };

  const handlePush = () => {
    if (!query) {
      alert("내용을 적어야 합니다.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const backupArray = [...array];
    backupArray.pop();
    setArray(backupArray);
    setResult(backupArray.join(", "));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
      </div>
      <div>
        <strong>Array</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>Result</strong> : {result}
      </div>
    </div>
  );
}

export default App;
