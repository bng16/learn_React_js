import TodoComp from "./TodoComp";

import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


const TodoComps=()=>{
  const todoContext= useContext(TodoItemsContext);
  


  return (
    <>

        {todoContext.todoList.map(todo => <TodoComp todoDate={todo.dueDate} todoTask={todo.taskName} todoId={todo.taskId}/>)}

    </>
  );
}

export default TodoComps;