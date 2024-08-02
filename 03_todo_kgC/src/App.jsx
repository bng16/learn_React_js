import "./App.css";
import Heading from "./components/Heading";
import InputArea from "./components/InputArea";
import TodoComps from "./components/TodoComps";
import Enjoy from "./components/Enjoy";

import { useState } from "react";

function App() {

const [todoList, setTodoList] = useState([]);

const addItem=(newItem)=>{
  setTodoList([...todoList,{taskName:newItem.todoName,dueDate:newItem.todoDate}]);
}
const deleteItem=(selectedItem)=>{
  let newList=todoList.filter((item)=>item.taskName!=selectedItem)
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
