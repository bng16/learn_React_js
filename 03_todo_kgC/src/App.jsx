import "./App.css";
import Heading from "./components/Heading";
import InputArea from "./components/InputArea";
import TodoComps from "./components/TodoComps";
import Enjoy from "./components/Enjoy";

import { useState } from "react";

function App() {

const [todoList, setTodoList] = useState([]);

const addItem=(newItem)=>{
  setTodoList([...todoList,{taskName:newItem.newName,dueDate:newItem.newDate, taskId:`${newItem.todoName}-${newItem.todoDate}-${todoList.length}-${Math.random()*100}`}]);
}
const deleteItem=(selectedItem)=>{
  let newList=todoList.filter((item)=>item.taskId!=selectedItem)
  setTodoList(newList);
}


  return (
    <>
      <center>
        <Heading/>

        <InputArea getItem={addItem}/>
        
        {todoList.length===0 && <Enjoy/>}
        <TodoComps tododata={todoList} deleteItem={deleteItem}/>
      </center>

    </>
  );
}

export default App;
