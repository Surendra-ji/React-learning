import { useState } from 'react';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import styles from './Item.module.css';

function AddTodo({handleAddTodo}) {
  const [todoName, settodoName] = useState();
  const [todoDate, settodoDate] = useState();
  const handleName = (e) => {
    settodoName(e.target.value);
  }

  const handleDate = (e) => {
    settodoDate(e.target.value);
  }
  const handleNameDate = (event) =>{
    event.preventDefault()
    handleAddTodo(todoName, todoDate)
    settodoDate("");
    settodoName("");

  }

  return <form className={`${styles.kgrow} row`} onSubmit={handleNameDate}>
    <div className="col-6">
      <input type="text" placeholder="Enter todo here" value={todoName} onChange={handleName} />
    </div>
    <div className="col-4">
      <input type="date" placeholder="pick date" value={todoDate} onChange={handleDate}/>
    </div>
    <div className="col-2"><button  className={`${styles.kgbtn} btn btn-success`}><MdOutlinePlaylistAdd/></button></div>
    {/* onClick={handleNameDate} */}
  </form>
}

export default AddTodo;