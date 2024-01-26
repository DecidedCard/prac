import React from "react";
import { useNavigate } from "react-router-dom";

function Homes() {
  const navigate = useNavigate();
  return (
    <div>
      Homes
      <br />
      <button
        onClick={() => {
          navigate("/works");
        }}
      >
        work로 이동
      </button>
    </div>
  );
}

export default Homes;
