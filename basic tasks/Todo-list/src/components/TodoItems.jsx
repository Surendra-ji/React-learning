import Item from "./Item";

function TodoItems({todoItems, handleDelet}) {
    return <>
      {todoItems.map(item => <Item key={item.workName} handleDelet= {handleDelet} workName={item.workName} workDate={item.workDate}/>)}
    </>

}

export default TodoItems;