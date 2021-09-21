import React from 'react';
import './TodoList.scss';

const DoneList = ({ items }) => {
  return (
    <div>
      <h2>Done Items</h2>
      {items.map((item, index) => (
        <div key={index}>
          <li className="list" key={item.id}>
            <h6>{item.title}</h6>
          </li>
        </div>
      ))}
    </div>
  );
};

export default DoneList;
