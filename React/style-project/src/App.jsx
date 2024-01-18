import { useState } from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const userAdd = () => {
    const newUser = {
      id: users.length + 1,
      age,
      name,
    };

    setUsers([...users, newUser]);
  };

  const clickUserDelete = (id) => {
    const newUser = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUser);
  };

  return (
    <div>
      <div>
        이름 :&nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <AddButton userAdd={userAdd} />
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            <User key={item.id} item={item} removeFunction={clickUserDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
