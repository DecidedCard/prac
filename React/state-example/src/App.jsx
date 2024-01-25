import React, { useCallback, useImperativeHandle, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  const [count, setCount] = useState(0);

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  const initBtn = useCallback(() => {
    console.log(`${count}에서 0으로 변했습니다.`);
    setCount(0);
  }, [count]);
  return (
    <>
      <h3>카운트 예제입니다!</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 initBtn={initBtn} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
