import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {count}
      </div>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
