import { useRef} from "react";

import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function InputArea() {
  const todoContext= useContext(TodoItemsContext);



  //! veriable to store the input from the form:===============
  const todoName=useRef('');
  const todoDate=useRef('');


  //! function to check if input empty and callling the function from app to add the data to the list:-----------
  const sendItem=(event)=>{
    event.preventDefault()
    let newName=todoName.current.value;
    let newDate=todoDate.current.value;

    if(newName != "" && newDate != "") {
      const uniqueId = `${newName}-${newDate}-${Math.random()*100}`;
      todoContext.addItem({newName,newDate,uniqueId});
      todoDate.current.value='';
      todoName.current.value='';
    }
  };


  return (
    <form className="grid grid-cols-5 gap-1 my-7" onSubmit={sendItem}>
      <div className="col-span-2  p-2">
        <input
          type="text"
          placeholder="Add Todo"
          ref={todoName}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="col-span-2 p-2">
        <input type="date"
          ref={todoDate}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="col-span-1 p-2">
        <button className="btn btn-accent w-20" type="submit">Add</button>
      </div>
    </form>
  );
}

export default InputArea;
