import TodoComp from "./TodoComp";


const TodoComps=({tododata,deleteItem})=>{
  return (
    <>

        {tododata.map(todo => <TodoComp todoDate={todo.dueDate} todoTask={todo.taskName} deleteItem={deleteItem}/>)}

    </>
  );
}

export default TodoComps;