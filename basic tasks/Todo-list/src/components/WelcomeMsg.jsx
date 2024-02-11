import { useContext } from 'react';
import styles from './WelcomeMsg.module.css';
import { TodoListContext } from '../store/todo-list-context';
function WelcomeMsg () { // arg {initTodo}
    // return initTodo.length === 0 && <h1 className={styles.welcomeMsg}> Enjoy your work.</h1>
    const {todoItems} = useContext(TodoListContext);
    return todoItems.length === 0 && <h1 className={styles.welcomeMsg}> Enjoy your work.</h1>

}

export default WelcomeMsg;