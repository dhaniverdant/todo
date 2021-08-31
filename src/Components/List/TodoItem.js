import React from 'react';
import check from '../../Images/check.png';
import './TodoList.scss'

const TodoItem = ({ title, doneItem }) => {
  
  return (
    <li className="list">
      <h6>{title}</h6>
      <div>
        <img className="icon-done" alt="check" src={check} onClick={doneItem} />
      </div>
    </li>
  );
};

export default TodoItem
