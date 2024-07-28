function InputArea() {
  return (
    <div className="grid grid-cols-5 gap-1 my-7">
      <div className="col-span-2  p-2">
        <input
          type="text"
          placeholder="Add Todo"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="col-span-2 p-2">
        <input type="date" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="col-span-1 p-2">
        <button className="btn btn-accent w-20">Add</button>
      </div>
    </div>
  );
}

export default InputArea;
