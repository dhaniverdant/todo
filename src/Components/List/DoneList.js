import React from "react";

const DoneList = ({ items, clearList }) => {
  
  return (
    <div>
      <h2 className="text-capitalize text-center">Done Items</h2>
      <ul className="list-group-item text-capitalize d-flex justify-content-between my-2">
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button>
    </div>
  );
};

export default DoneList;
