import { createContext } from "react";

export const TodoListContext = createContext({
    todoItems: [],
    handleAddTodo: () => {},
    handleDelete: () => {}
});
