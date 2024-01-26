import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData([...json]));
  }, []);
  return (
    <div>
      jsonplascholder
      {data.map((i) => {
        return (
          <div>
            <ul style={{ margin: "5px", border: "1px solid black" }}>
              <li>{i.userId}</li>
              <li>{i.id}</li>
              <li>{i.title}</li>
              <li>{i.body}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
