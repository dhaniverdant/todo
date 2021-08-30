import React from "react";

const DoneList = ({ items }) => {
  return (
    <div>
      <h2 className="text-capitalize text-center">Done Items</h2>
        {items.map(item => (
          <div>
            {/* <li className="list-group-item text-capitalize d-flex" key={item.id}>{item.title}</li> */}
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" key={item.id}>
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
