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
      {todos.map((todo) => {
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
{/* <div>{boards.map(board=>{
return(
    <div>{board.title}</div>
)
}
</div> */}
{/* {boards.map(board=><div>{board.title}</div>} */}

      
    </div>
  );
};

export default Board;
