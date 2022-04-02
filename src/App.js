import "./App.css";
import ToDo from "./component/Todo.js";
import Board from "./component/Board";
import TodoForm from "./component/TodoForm.js";
import { useState } from "react";

function App() {

//   const [boards, setBoards] = useState([
//     {id: 1, title: 'Backlog', cards: [{id: 1, title: 'task 1', }, {id: 4, title: 'task 4', }, {id: 7, title: 'task 7', }]},
//     {id: 2, title: 'In progress', cards: [{id: 2, title: 'task 2', }, {id: 5, title: 'task 5', }, {id: 8, title: 'task 8', }]},
//     {id: 3, title: 'Done', cards: [{id: 3, title: 'task 3', }, {id: 6, title: 'task 6', }, {id: 9, title: 'task 9', }]}
// ])

  const [todos, setTodos] = useState([]);

  const addTodo = (todoInput) => {
    if (todoInput) {
      const newTodo = {
        id: Math.random().toString(36),
        task: todoInput,
        done: false,
        // board: null,
        important: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    // console.log(todos.length)
  };

  const pinTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id === id), ...todos]);

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
      <header className="Tasks" >
        <div>
        <h2 >Task list: {todos.length} </h2>
        <h2 >
          Done Tasks: {todos.filter((todo)=>todo.done !== false ).length} 
        </h2>
        <h2 >
          Done Tasks: {todos.filter((todo)=>todo.important !== false ).length} 
        </h2>
        </div>
      </header>
      <TodoForm addTodo={addTodo} />
      <Board todos={todos} 
      removeTodo={removeTodo}
      handlerTodo={handlerTodo} 
      handlerImportant={handlerImportant}
      pinTodo={pinTodo}
      />
            {/* <Board todos={todos} 
      removeTodo={removeTodo}
      handlerTodo={handlerTodo} 
      /> */}
    </div>
  );
}

export default App;
