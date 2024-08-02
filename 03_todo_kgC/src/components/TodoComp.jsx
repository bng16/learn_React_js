function TodoComp({todoTask,todoDate,deleteItem}) {

  const deleteThat=()=>{
    deleteItem(todoTask)
  }
  return (
    <div className="grid grid-cols-5 gap-1 bg-slate-50 rounded-md">
      <div className="col-span-2  p-4 flex justify-center items-center">
        <h3 className="text-xl font-bold">{todoTask}</h3>
      </div>
      <div className="col-span-2 p-2 flex justify-center items-center">
        <h3>{todoDate}</h3>
      </div>
      <div className="col-span-1 p-2 flex justify-center items-center">
        <button key={`${todoTask}-${todoDate}`} className="btn btn-error" onClick={deleteThat}>Delete</button>
      </div>
    </div>
  );
}

export default TodoComp;