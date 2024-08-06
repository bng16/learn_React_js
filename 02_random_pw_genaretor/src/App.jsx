import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  //! useState
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //! useRef
  const passRef = useRef(null);

  //! useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+=-`~,./';[]{}:<>?";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  //!  useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyPassToClipBoard=()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div
      id="background"
      className="w-full h-screen bg-black flex justify-center items-center"
    >
      <div
        id="pw-gen-container"
        className="w-[500px] h-[200px] rounded-lg bg-slate-400 flex flex-col justify-around items-center"
      >
        <div id="displayArea" className=" ">
          <input
            type="text"
            value={password}
            ref={passRef}
            readOnly
            className="w-[250px] h-[35px] rounded-l-lg px-3"
          />
          <button className="w-[60px] h-[35px] rounded-r-lg bg-blue-500 text-white" onClick={copyPassToClipBoard}>
            Copy
          </button>
        </div>

        <div id="inputArea" className=" flex w-full justify-around">
          <div
            id="inputRangeArea"
            className="flex flex-col justify-center items-center gap-2"
          >
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">{`length : ${length}`}</label>
          </div>

          <div id="numberInputContainer">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="ml-2">Number</label>
          </div>

          <div id="characterInputContainer">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label className="ml-2">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
