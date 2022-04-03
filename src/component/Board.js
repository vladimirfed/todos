import React from "react";
import ToDo from "./Todo.js";

const Board = ({
  todos,
  removeTodo,
  handlerTodo,
  pinTodo,
  handlerImportant,
}) => {
  return (
    <div className="Board">
      <h1 className="App">Board</h1>
      {todos.length === 0
        ? <h3 style={{textAlign: 'center'}} >Enter task</h3>
        : todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                removeTodo={removeTodo}
                handlerTodo={handlerTodo}
                handlerImportant={handlerImportant}
                pinTodo={pinTodo}
                key={todo.id}
              />
            );
          })}
    </div>
  );
};

export default Board;
