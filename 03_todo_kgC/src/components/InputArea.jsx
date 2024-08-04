import { useRef} from "react";

function InputArea({getItem}) {
  const todoName=useRef('');
  const todoDate=useRef('');

  const sendItem=(event)=>{
    event.preventDefault()
    let newName=todoName.current.value;
    let newDate=todoDate.current.value;


    if(newName != "" && newDate != "") {
      getItem({newName,newDate});
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
