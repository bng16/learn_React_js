import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen flex justify-center" style={{ backgroundColor: color }}>
      <div id="nav-bar" className="p-2 bg-white rounded-3xl flex-wrap fixed bottom-2 ml-2 mr-2 flex flex-row gap-2">
        <button className="flex justify-center items-center px-4 py-1 rounded-full text-white border-black border-solid border-[1px]" style={{ backgroundColor: 'red' }} onClick={()=>{setColor('red')}}>
          red
        </button>

        <button className="flex justify-center items-center px-4 py-1 rounded-full text-white border-black border-solid border-[1px]" style={{ backgroundColor: 'green' }} onClick={()=>{setColor('green')}}>
          green
        </button>

        <button className="flex justify-center items-center px-4 py-1 rounded-full text-white border-black border-solid border-[1px]" style={{ backgroundColor: 'blue' }} onClick={()=>{setColor('blue')}}>
          blue
        </button>

        <button className="flex justify-center items-center px-4 py-1 rounded-full text-black border-black border-solid border-[1px]" style={{ backgroundColor: 'yellow' }} onClick={()=>{setColor('yellow')}}>
          yellow
        </button>

        <button className="flex justify-center items-center px-4 py-1 rounded-full text-white border-black border-solid border-[1px]" style={{ backgroundColor: 'black' }} onClick={()=>{setColor('black')}}>
          black
        </button>
      </div>
    </div>
  );
}

export default App;
