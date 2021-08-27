import React from 'react';
import check from '../../Images/check.png'

const TodoItem = ({ title, doneItem }) => {
  
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <img className="icon-close" alt="check" src={check} onClick={doneItem} />
      </div>

    </li>
  );
};

export default TodoItem
