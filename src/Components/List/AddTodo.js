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

  return (
    <div>
      <div>Add List</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fa fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="Add A To Do Item"
            value={text}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="btn btn-block btn-primary mt-3"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
