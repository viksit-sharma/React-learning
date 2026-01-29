import { useState } from "react";
export default function TodoList() {
  let [todo, setTodo] = useState([]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodo([...todo, newTodo]);
    setNewTodo("");
  };
  let updateTodoList = (event) => {
    setNewTodo(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTodoList}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <hr></hr>
      <h4>To-Do List</h4>
      <ul>
        {todo.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
