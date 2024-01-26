import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Works() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      Works <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home로 이동
      </button>
    </div>
  );
}

export default Works;
