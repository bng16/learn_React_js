import "./App.css";

function App() {
  return (
    <>
      <center>
        <h1>Todo App</h1>
        <div className="grid grid-cols-5 gap-1 ">
          <div className="col-span-2  p-2">
            <input type="text" placeholder="Add Todo" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="col-span-2 p-2">
            <input type="date" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="col-span-1 p-2">
          <button className="btn btn-accent">Add</button>
          </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
          <div className="col-span-2  p-4 flex justify-center items-center">
            <h3 className="text-lg ">todo name</h3>
          </div>
          <div className="col-span-2 p-2 flex justify-center items-center">
            <h3>15/8/2024</h3>
          </div>
          <div className="col-span-1 p-2 flex justify-center items-center">
          <button className="btn btn-error">Delete</button>
          </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
          <div className="col-span-2  p-4  flex justify-center items-center">
            <h3>todo name 2</h3>
          </div>
          <div className="col-span-2 p-2  flex justify-center items-center">
            <h3>16/8/2024</h3>
          </div>
          <div className="col-span-1 p-2 flex justify-center items-center">
          <button className="btn btn-error">Delete</button>
          </div>
      </div>
      </center>

    </>
  );
}

export default App;
