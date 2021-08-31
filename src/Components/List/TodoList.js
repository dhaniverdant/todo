import React from 'react';
import './TodoList.scss'
import TodoItem from './TodoItem';

function TodoList({ items, clearList, doneItem  }) {
  return (
    <div>
      <div>To Do Task</div>
      {items.map(item => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            doneItem={() => doneItem(item.id)}
          />
        );
      })}
      { items.length > 0 ? <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button> : "" }
    </div>
  );
}

// function TodoList() {
//   const [count, setCount] = React.useState(0)

//   React.useEffect(() => {
//     const parsedCount = Number(localStorage.getItem("count") || 0)
//     setCount(parsedCount)
//   }, [])

//   React.useEffect(() => {
//     localStorage.setItem("count", count)
//   }, [count])

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount(c => c + 1)}>+</button>
//       <button onClick={() => setCount(c => c - 1)}>-</button>
//     </div>
//   )
// }

export default TodoList;
