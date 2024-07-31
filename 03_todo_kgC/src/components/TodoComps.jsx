import TodoComp from "./TodoComp";


const TodoComps=({tododata})=>{
  return (
    <>

        {tododata.map(todo => <TodoComp todoDate={todo.dueDate} todoTask={todo.taskName}/>)}

    </>
  );
}

export default TodoComps;