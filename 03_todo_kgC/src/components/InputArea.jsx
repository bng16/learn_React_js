import { useState } from "react";

function InputArea({getItem}) {
  const [todoName,setTodoName]=useState('');
  const [todoDate,setTodoDate]=useState('');
  const getDate=(date)=>{
    setTodoDate(date)
  }
  const getName=(name)=>{
    setTodoName(name)
  }
  const sendItem=(todoName,todoDate)=>{
    if(todoName != "" && todoDate != "") {
      getItem({todoName,todoDate});
      setTodoName("");
      setTodoDate("");
    }
  }


  return (
    <div className="grid grid-cols-5 gap-1 my-7">
      <div className="col-span-2  p-2">
        <input
          type="text"
          placeholder="Add Todo"
          className="input input-bordered w-full max-w-xs"
          value={todoName}
          onChange={(event)=>getName(event.target.value)}
        />
      </div>
      <div className="col-span-2 p-2">
        <input type="date"
          className="input input-bordered w-full max-w-xs"
          value={todoDate}
          onChange={(event)=>getDate(event.target.value)}
        />
      </div>
      <div className="col-span-1 p-2">
        <button className="btn btn-accent w-20" onClick={()=>sendItem(todoName,todoDate)}>Add</button>
      </div>
    </div>
  );
}

export default InputArea;
