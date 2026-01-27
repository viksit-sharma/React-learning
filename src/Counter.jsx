import { useState } from "react";
export default function Counter() {

  function init() {
    return 0;
  }
  // let[count, setCount] = useState(init());//function is executed
  //this executes the function init every time the re-rendering occurs

  
  let [count, setCount] = useState(init);//function is passed as reference
  //this does not executes the function again and again every time re-rendering occurs just executex once at starting i.e. first rendering



  // let [count, setCount] = useState(0);//no function passed instead constant value is passed
  //initialisation only runs once except this every thing runs again with each re-render
  //firstly full code executes as regular then executes again after re-rendering happens

  let incCount = () => {
    //Pridictible(Syncronous) behaviour with callbacks means if setCount runs 2 times it actually inceases value by 2 this is called callbacks in updater function
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    //Component tabhi re-render hota hai jab state ki value mein koi change aata hai agar koi change nhi aata toh re-rendering band ho jaati hai like if we write setCount(25); then due to same value 25 there will be no change and therefore no re-rendering due to this
  };
  // let incCount = () => {
  // //Unpredictible(Asyncronous) behaviour without callbacks means if setCount runs 2 times it does not increses value by 2
  //   setCount(count + 1);
  //   console.log(count);
  // };
  return (
    <div>
      <h3>Count - {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
