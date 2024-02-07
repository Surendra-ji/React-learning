import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import "./App.css";
function App() {
  let todo = [{
    workName: 'aaaaa',
    workDate: '10/10/2024'
  }, {
    workName: 'bbbbbb',
    workDate: '14/10/2024'
  }, {
    workName: 'aaaccccaa',
    workDate: '12/11/2024'
  }, {
    workName: 'dddddd',
    workDate: '16/12/2024'
  }];
  return <center className='todo-container'>
    <AppName></AppName>
    <div className="item-container">
      <AddTodo></AddTodo>
      <TodoItems todo={todo} />
    </div>
  </center>
}

export default App
