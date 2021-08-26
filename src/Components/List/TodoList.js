import React, { useState } from 'react';
import './TodoList.scss'
import check from '../../Images/check.png'

function TodoList() {
  const [todo, setTodo] = useState([
    {
      name: "morning workout",
      isDone: false
    },
    {
      name: "wash the car",
      isDone: false
    },
    {
      name: "lunch",
      isDone: true
    }
  ]);

  const onClickDone = index => e => {
    let newArr = [...todo];
    newArr[index].isDone = true;

    setTodo(newArr);
  }

  const mapTodo = todo.map((item, index) => {
    return (
      <div className="list" key={index}>
        <div>{item.name}</div>
        {item.isDone === false ?
          <img className="icon-close" alt="check" src={check} onClick={onClickDone(index)} /> : ""
        }
      </div>
    );
  })

  return mapTodo;
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
