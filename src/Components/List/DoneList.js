import React from 'react';
import './TodoList.scss';

const DoneList = ({ items }) => {
  return (
    <div>
      <h2>Done Items</h2>
        {items.map(item => (
          <div>
            {/* <li className="list-group-item text-capitalize d-flex" key={item.id}>{item.title}</li> */}
            <li className="list" key={item.id}>
              <h6>{item.title}</h6>
            </li>
            {/* <br /> */}
          </div>
        ))}
      {/* <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button> */}
    </div>
  );
};

export default DoneList;
