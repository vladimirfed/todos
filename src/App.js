import "./App.css";
import ToDo from "./component/Todo.js";
import TodoForm from "./component/TodoForm.js";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoInput) => {
    if (todoInput) {
      const newTodo = {
        id: Math.random().toString(36),
        task: todoInput,
        done: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handlerTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h2 className="Tasks">Task list: {todos.length} </h2>
      </header>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            removeTodo={removeTodo}
            handlerTodo={handlerTodo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
