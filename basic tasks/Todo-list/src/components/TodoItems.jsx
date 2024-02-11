import { useContext } from "react";
import Item from "./Item";
import { TodoListContext } from "../store/todo-list-context";

function TodoItems() {
  const {todoItems} = useContext(TodoListContext);
    return <>
      {todoItems.map(item => <Item key={item.workName} workName={item.workName} workDate={item.workDate}/>)}
    </>

}

export default TodoItems;