import "./App.css";
import Board from "./component/Board";
import TodoForm from "./component/TodoForm.js";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [deleted, setDeleted] = useState(0);

  const addTodo = (todoInput) => {
    if (todoInput) {
      const newTodo = {
        id: Math.random().toString(36),
        task: todoInput,
        done: false,
        important: false,
      };
      setTodos([...todos, newTodo].reverse());
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);

    setDeleted(deleted + 1);
    // console.log(deleted);
  };

  const pinTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id === id),
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const handlerTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      ),
    ]);
  };

  const handlerImportant = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header className="Tasks">
        <div>
          <h3>Task list: {todos.length} </h3>
          <h3>
            Done Tasks: {todos.filter((todo) => todo.done !== false).length}
          </h3>
          <h3>
            Important Tasks:{" "}
            {todos.filter((todo) => todo.important !== false).length}
          </h3>
          <h3>Deleted tasks: {deleted} </h3>
        </div>
      </header>
      <TodoForm addTodo={addTodo} />
      <Board
        todos={todos}
        removeTodo={removeTodo}
        handlerTodo={handlerTodo}
        handlerImportant={handlerImportant}
        pinTodo={pinTodo}
      />
    </div>
  );
}

export default App;
