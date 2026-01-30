import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //For unique keys for different tasks
export default function TodoList() {
  let [todo, setTodo] = useState([{ task: "Sample-Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let updateTodoList = (event) => {
    setNewTodo(event.target.value);
    // console.log(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id));
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
        {todo.map((todos) => {
          return (
            <li key={todos.id}>
              <span>{todos.task}</span>
              <button onClick={() => deleteTodo(todos.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
