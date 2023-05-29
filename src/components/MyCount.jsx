import { useEffect, useState } from "react";
import React from "react";

export function MyCount(props) {
  console.log("7amada");
  let [count, setCount] = useState(0);
  console.log(count);
  useEffect(() => {
    console.log("comp did mount");
  }, []);
  let increase = () => {
    setCount(count + 1);
    console.log(count);
  };
  let { myfun } = props;

  return (
    <div>
      {console.log("render")}
      count : {count}
      <button onClick={increase}>increase</button>
      <input type="text" onChange={myfun} />
    </div>
  );
}
