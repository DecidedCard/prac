import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = [
    "banana",
    "apple",
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
    array.forEach((fruits, index) => {
      tempResult += `${index} : ${fruits}, `;
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

  const handleSlice = () => {
    const backupArray = [...array];
    const check = backupArray.slice(0, -2);
    setResult(check.join(", "));
  };

  const handleSplice = () => {
    const backupArray = [...array];
    backupArray.splice(2, 2, "kiwi", "lime");
    setResult(backupArray.join(", "));
  };

  const handleIndexOf = () => {
    setResult(array.indexOf(query));
  };

  const handleIncludes = () => {
    setResult(`${array.includes(query)}`);
  };

  const handleFind = () => {
    const check = array.find((e) => e === query);
    if (check === undefined) {
      setResult("Not Found");
    } else {
      setResult(check);
    }
  };

  const handleSome = () => {
    setResult(`${array.some((e) => e === query)}`);
  };

  const handleEvery = () => {
    setResult(`${array.every((cur) => cur > 5)}`);
  };

  const handleSort = () => {
    const backupArray = [...array];
    backupArray.sort();
    setResult(backupArray.join(", "));
  };

  const handleJoin = () => {
    setResult(array.join("-"));
  };

  return (
    <div className="main">
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          placeholder="Enter text"
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
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>include</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div className="array">
        <strong>원본배열 </strong> : {array.join(", ")}
      </div>
      <div className="array">
        <strong>결과물 </strong> : {result}
      </div>
    </div>
  );
}

export default App;
