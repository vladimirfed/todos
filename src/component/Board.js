import React from 'react';
import ToDo from "./Todo.js";


const Board = ({todos, removeTodo,handlerTodo,pinTodo, handlerImportant}) => {
    return (
        <div className='Board'>
            <h1>Board</h1>
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
      {/* <ToDo /> */}
        </div>
    );
};

export default Board;