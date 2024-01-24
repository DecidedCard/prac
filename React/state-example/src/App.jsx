import React, { useEffect, useRef, useState } from "react";

function App() {
  const idRef = useRef("");
  const pwRef = useRef("");
  const [id, setId] = useState("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);

  const onChangeHandler = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <div>
        아이디 :{" "}
        <input type="text" ref={idRef} value={id} onChange={onChangeHandler} />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;
