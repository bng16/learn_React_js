function TodoComp({todoTask,todoDate}) {
  return (
    <div className="grid grid-cols-5 gap-1 bg-slate-50 rounded-md">
      <div className="col-span-2  p-4 flex justify-center items-center">
        <h3 className="text-xl font-bold">{todoTask}</h3>
      </div>
      <div className="col-span-2 p-2 flex justify-center items-center">
        <h3>{todoDate}</h3>
      </div>
      <div className="col-span-1 p-2 flex justify-center items-center">
        <button className="btn btn-error">Delete</button>
      </div>
    </div>
  );
}

export default TodoComp;