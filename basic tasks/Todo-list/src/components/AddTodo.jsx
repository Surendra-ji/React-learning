import styles from './Item.module.css';

function AddTodo() {
    return <div className={`${styles.kgrow} row`}>
    <div className="col-6">
      <input type="text" placeholder="Enter todo here" />
    </div>
    <div className="col-4">
      <input type="date" placeholder="pick date" />
    </div>
    <div className="col-2"><button className={`${styles.kgbtn} btn btn-success`}>Add</button></div>
  </div>
}

export default AddTodo;