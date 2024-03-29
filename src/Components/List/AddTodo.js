import React, { useState } from "react";
import './TodoList.scss'
import { v1 as uuid } from "uuid";

const AddTodo = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = event => setText(event.target.value);
  const handleSave = () => {
    handleSubmit({ title: text, id: uuid() });
    setText("");
  };
  const buttonClass = text.length > 0 ? "btn btn-block btn-primary mt-3" : "btn btn-block btn-primary mt-3 disabled"

  return (
    <div>
      <div>Add List</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add A To Do Item"
            value={text}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className={buttonClass}
          disabled={text.indexOf(" ") === 0}
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
