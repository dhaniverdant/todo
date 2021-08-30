import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from '../../Components/List/AddTodo';
import DoneList from '../../Components/List/DoneList';
import TodoList from '../../Components/List/TodoList';
import './Landing.scss';

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
    <div className="landing-wrapper">
      <AddTodo handleSubmit={onAdd} />
      <TodoList
        items={incompleteItems}
        clearList={clearList}
        doneItem={doneItem}
      />
      <DoneList items={completeItems} doneItem={doneItem} />
    </div>
  );
}

export default Landing;
