import React from "react";
import Draggable from "react-draggable";

const ToDo = ({ todo, handlerTodo, pinTodo, removeTodo, handlerImportant }) => {
  return (
    <Draggable>
      <div
        key={todo.id}
        className={todo.important ? "item-todo imp" : "item-todo"}
      >
        <div>
          <div
            className={todo.done ? "item-text strike" : "item-text"}
            onClick={() => handlerTodo(todo.id)}
          >
            {todo.task}
          </div>
        </div>
        <p className="item-delete" onClick={() => removeTodo(todo.id)}>
          🗑️
        </p>
        <p className="item-delete" onClick={() => handlerImportant(todo.id)}>
          ⭐
        </p>
        <p className="item-delete" onClick={() => pinTodo(todo.id)}>
          📌
        </p>
      </div>
    </Draggable>
  );
};

export default ToDo;
