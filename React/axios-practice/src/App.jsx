import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");

  // 조회 함수
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    setTodos(data);
  };

  // 추가 함수
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // 버튼 클릭 시, input에 들어있는 값(state)를 이용하여 DB에 저장(post 요청)
    fetchTodos();
  };

  // 삭제 함수
  const onDeleteButtonClickHandler = async (id) => {
    await axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  // 수정 함수
  const onUpdateButtonClickHandler = async () => {
    await axios.patch(`http://localhost:4000/todos/${targetId}`, {
      title: contents,
    });
    setTodos(
      todos.map((item) => {
        if (item.id === targetId) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    // db로부터 값을 가져올 것이다.
    fetchTodos();
  }, []);
  return (
    <>
      <div>
        {/* 수정 영역 */}
        <input
          placeholder="수정할 아이디"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
        />
        <input
          placeholder="내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
      </div>
      <div>
        {/* INPUT 영역 */}
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value,
              });
            }}
          />
          <button>추가</button>
        </form>
      </div>
      <div>
        {/* 데이터 영역 */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id}:{item.title}
              <button onClick={() => onDeleteButtonClickHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
