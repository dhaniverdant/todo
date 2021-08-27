import React from 'react';
import './TodoList.scss'
// import check from '../../Images/check.png'
// import AddButton from '../Buttons/AddButton'
import TodoItem from './TodoItem';

function TodoList({ items, clearList, doneItem  }) {
  // const [todo, setTodo] = useState([
  //   {
  //     name: "morning workout",
  //     isDone: false
  //   },
  //   {
  //     name: "wash the car",
  //     isDone: false
  //   },
  //   {
  //     name: "lunch",
  //     isDone: true
  //   }
  // ]);

  // const [done, setDone] = useState([]);

  // const onClickDone = index => e => {
  //   let newArr = [...todo];
  //   newArr[index].isDone = true;
  //   setDone(newArr[index]);

  //   setTodo(newArr);
  // }

  // const onAddList = () => {
  //   console.log("add button clicked");
  // }

  // const mapTodo = todo.map((item, index) => {
    // const incompleteItems = item.filter(item => !item.isComplete);
    // const completeItems = item.filter(item => setDone(item.isComplete));
  //   return (
  //     <div className="list" key={index}>
  //       <div>{item.name}</div>
  //       {item.isDone === false ?
  //         <img className="icon-close" alt="check" src={check} onClick={onClickDone(index)} /> : ""
  //       }
  //     </div>
  //   );
  // })

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
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button>
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
