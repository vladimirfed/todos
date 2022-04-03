import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="inp" class="inp">
          <input
            value={todoInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Add something to do"
          ></input>
          <button>Save </button>
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
