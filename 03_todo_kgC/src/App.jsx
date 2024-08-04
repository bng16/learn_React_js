import "./App.css";
import Heading from "./components/Heading";
import InputArea from "./components/InputArea";
import TodoComps from "./components/TodoComps";
import Enjoy from "./components/Enjoy";

import { useState } from "react";
import {TodoItemsContext} from "./store/todo-items-store";


function App() {
  //defined functions for computation
  const [todoList, setTodoList] = useState([]);

  // ! function to add new item in the list:---------------
  const addItem = (newItem) => {
    setTodoList([...todoList,{taskName: newItem.newName,dueDate: newItem.newDate,taskId: newItem.uniqueId,},]);
  };

  // ! function to delete item from the list the list:-----------
  const deleteItem = (selectedItem) => {
    let newList = todoList.filter((item) => item.taskId != selectedItem);
    setTodoList(newList);
  };

  

  return (
    <>
      <TodoItemsContext.Provider value={{todoList, addItem, deleteItem,}}>
        <center>
          <Heading />
          <InputArea />
          {todoList.length === 0 && <Enjoy />}
          <TodoComps tododata={todoList} deleteItem={deleteItem} />
        </center>
      </TodoItemsContext.Provider>
      
    </>
  );
}

export default App;
