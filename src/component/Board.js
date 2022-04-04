import { fireEvent } from "@testing-library/react";
import React from "react";
import ToDo from "./Todo.js";

const Board = ({
    boards,
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
          
                  {boards.map(board=>{
            return(
                <div>{board.title}</div>
            )
        })}
        
    </div>
  );
};

export default Board;
