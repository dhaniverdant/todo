import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from '../../Components/List/AddTodo';
import DoneList from '../../Components/List/DoneList';
import TodoList from '../../Components/List/TodoList';

const Landing = () => {
  const [items, setItems] = useState([]);

  const onAdd = item => {
    setItems(current => [...current, { ...item, isComplete: false }]);
  };

  const clearList = () => setItems([]);

  const doneItem = id => {
    const item = items.find(x => x.id === id);
    item.isComplete = true;
    setItems(current => [...current.filter(x => x.id !== id), item]);
  };

  const incompleteItems = items.filter(x => !x.isComplete);
  const completeItems = items.filter(x => x.isComplete);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Inputs</h3>
          <AddTodo handleSubmit={onAdd} />
          <TodoList
            items={incompleteItems}
            clearList={clearList}
            doneItem={doneItem}
          />
          <DoneList items={completeItems} doneItem={doneItem} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
