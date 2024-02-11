import { useContext } from 'react';
import styles from './Item.module.css';
import { TodoListContext } from '../store/todo-list-context';
function Item({workName,workDate}) {
    const {handleDelete} = useContext(TodoListContext);

    const onDelete = () => {
        handleDelete(workName);
    }
    return <div className={`${styles.kgrow} row`}>
        <div className="col-6">
            {workName}
        </div>
        <div className="col-4">
            {workDate}
        </div>
        <div className="col-2"><button onClick={onDelete} className={`${styles.kgbtn} btn btn-danger`}>Delete</button></div>
    </div>


}
export default Item;