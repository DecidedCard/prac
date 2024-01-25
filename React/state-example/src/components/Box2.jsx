import React from "react";

function Box2() {
  console.log("Box2 컴포넌트가 렌더링되었습니다.");
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "#4e93ed",
    color: "white",
  };
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
