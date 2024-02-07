import Item from "./Item";

function TodoItems({todo}) {
    return <>
      {todo.map(item => <Item key={item} workName={item.workName} workDate={item.workDate}/>)}
    </>

}

export default TodoItems;