import React from "react";

const ToDo = ({ todo, handlerTodo, removeTodo }) => {
  return (
    <div key={todo.id} className="item-todo" >
      
      
      <div>
        <div
          className={todo.done ? "item-text strike" : "item-text"}
          onClick={() => handlerTodo(todo.id)}
        >
          {todo.task}
        </div>
      </div>
      <div className="item-delete" onClick={() => removeTodo(todo.id)}>X</div>
    </div>
  );
};

export default ToDo;
