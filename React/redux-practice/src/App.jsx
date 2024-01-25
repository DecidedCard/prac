import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const data = useSelector((state) => {
    return state;
  });

  console.log(data);
  return <div>Redux!</div>;
}

export default App;
