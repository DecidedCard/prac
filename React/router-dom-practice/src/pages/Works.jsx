import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <div>
      <h3>할일 목록</h3>
      {data.map((e) => {
        return (
          <div key={e.id}>
            {e.id}, <Link to={`/works/${e.id}`}>{e.todo}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
