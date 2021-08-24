import React from 'react'
import AddButton from '../../Components/Buttons/AddButton'
import TodoList from '../../Components/List/TodoList';

const Landing = () => {
  const onAddList = () => {
    console.log("add button clicked");
  }

  return (
    <div>
      <div>To Do Landing Page</div>
      <AddButton text="Add To Do List" onClick={onAddList} />
      <TodoList />
    </div>
  );
}

export default Landing;
