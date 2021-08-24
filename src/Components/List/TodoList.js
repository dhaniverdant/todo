import React, { useState } from 'react';
import './TodoList.scss'

const TodoList = () => {
  const [todo] = useState([
    {
      name: "morning workout",
      isDone: false
    },
    {
      name: "wash the car",
      isDone: true
    }
  ])
  const mapTodo = todo.map((item) => {
    return (
      <div className="list">
        <div>{item.name}</div>
        <div>{item.isDone === false ? "Not Done" : "Done" }</div>
      </div>
    );
  })
  return mapTodo;
}

export default TodoList;
