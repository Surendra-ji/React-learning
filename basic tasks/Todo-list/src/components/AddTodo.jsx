import { useContext, useRef } from 'react';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import styles from './Item.module.css';
import { TodoListContext } from '../store/todo-list-context';

function AddTodo() {
  const {handleAddTodo} = useContext(TodoListContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  // const [todoName, settodoName] = useState();
  // const [todoDate, settodoDate] = useState();
  // const handleName = (e) => {
  //   settodoName(e.target.value);
  // }

  // const handleDate = (e) => {
  //   settodoDate(e.target.value);
  // }
  // insted of useState we will use useRef

  const handleNameDate = (event) =>{
    event.preventDefault()
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    handleAddTodo(todoName, todoDate)
    // settodoDate("");
    // settodoName("");
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

  }

  return <form className={`${styles.kgrow} row`} onSubmit={handleNameDate}>
    <div className="col-6">
      <input type="text" placeholder="Enter todo here" ref={todoNameElement} />
      {/* value={todoName} onChange={handleName} */}
    </div>
    <div className="col-4">
      <input type="date" placeholder="pick date" ref={todoDateElement}/>
      {/* value={todoDate} onChange={handleDate} */}
    </div>
    <div className="col-2"><button  className={`${styles.kgbtn} btn btn-success`}><MdOutlinePlaylistAdd/></button></div>
    {/* onClick={handleNameDate} */}
  </form>
}

export default AddTodo;