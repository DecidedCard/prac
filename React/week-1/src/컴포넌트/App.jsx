import React, { useState } from "react";

function App() {
  const [obj, setObj] = useState({
    name: "wonjang",
    age: 21,
  });
  return (
    <div>
      <div>{obj.name}</div>
      <button
        onClick={() => {
          obj.name = "twojang";
          const obj2 = { ...obj };
          setObj(obj2);
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App;
