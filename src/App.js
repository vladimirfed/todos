import "./App.css";
import Board from "./component/Board";
import SelectTodo from "./component/SelectTodo";
import TodoForm from "./component/TodoForm.js";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const [select, setSelect] = useState('');

//--------------------------------------------------------
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

  const sortTodo = (task) => {
    // setSelect(sort)
    setTodos([...todos].sort((a,b)=>{
      if(a.task < b.task) { return -1; }
      if(a.task > b.task) { return 1; }
      return 0;
  }))
  // WORK BUT NEED TO REFACTOR !!!
    // console.log(sort)
  }

//-----------------------------------------------------------------------------
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
      <SelectTodo 
      onChange={sortTodo}
      defaultValue="Sort by"
      options={[
        {value: 'task', name: 'A-Z'},
        {value: 'done', name: 'Done'},
      ]} />
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
