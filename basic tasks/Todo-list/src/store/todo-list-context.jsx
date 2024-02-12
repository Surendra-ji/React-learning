import { useReducer } from "react";
import { createContext } from "react";

export const TodoListContext = createContext({
    todoItems: [],
    handleAddTodo: () => {},
    handleDelete: () => {}
});


const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { workName: action.payload.itemName, workDate: action.payload.itemDueDate },
    ];
    // console.log(action.payload);
  } else if (action.type === "DELETE_ITEM") {
    // console.log("action.payload.itemName: "+action.payload.itemName);
    newTodoItems = currTodoItems.filter(
      (item) => item.workName !== action.payload.itemName
    );
  }
  console.log(newTodoItems);
  return newTodoItems;
};
let initTodo  = [{
    workName: 'First work',
    workDate: '10/10/2024'
  }, {
    workName: 'second work',
    workDate: '14/10/2024'
  }];

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, initTodo);

  const handleAddTodo = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDelete = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoListContext.Provider
      value={{
        todoItems,
        handleAddTodo,
        handleDelete,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoItemsContextProvider;