import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const params = useParams();

  // 어떤 todo인지 찾아보기
  const foundData = data.find((i) => {
    return i.id === parseInt(params.id);
  });
  return <div>{foundData.todo}</div>;
}

export default Work;
