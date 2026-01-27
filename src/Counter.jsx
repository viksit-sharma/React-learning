import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);//initialisation only runs once except this every thing runs again with each re-render
  //firstly full code executes as regular then executes again after re-rendering happens
  let incCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h3>Count - {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
