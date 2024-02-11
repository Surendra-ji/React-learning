import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";
import { TodoListContext } from "./store/todo-list-context";

function App() {
  let initTodo  = [{
    workName: 'aaaaa',
    workDate: '10/10/2024'
  }, {
    workName: 'bbbbbb',
    workDate: '14/10/2024'
  }];

  const [todoItems, settodoItems] = useState(initTodo);
  const handleAddTodo = (workName, workDate) => {
    const newtodoItem = [
      ...todoItems,
      { workName: workName, workDate: workDate }
    ];
    // insted of using useState setValue(); use like below it will reduse errors in big projects 
    // in below currVal is your current value to todoItems it called functional update
    settodoItems(newtodoItem);
  }

  const handleDelete = (wName) => {
    const updatedTodo = todoItems.filter(todo => todo.workName !== wName);
    // console.log(updatedTodo);
    settodoItems(updatedTodo);
  };
  return <TodoListContext.Provider value={
    {
      todoItems,
      handleAddTodo,
      handleDelete
    }
  }>
    <center className='todo-container'>
      <AppName></AppName>
      <div className="item-container">
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </div>
    </center>
  </TodoListContext.Provider>
}

export default App
