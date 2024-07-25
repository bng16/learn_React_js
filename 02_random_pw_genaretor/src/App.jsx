import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharecter] = useState(false);
  const [pw, setPw] = useState("");

  const pwGenerator=useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str+='0123456789';
    if (character) str+='!@#$%^&*()_+{}|:"<>?~`-=[];,./';

    for (let i=0; i<str.length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length-1));
    }
    setPw(pass);


  },[length,number,character,setPw])

  return (
    <>
      <h1>Password Generator</h1>
    </>
  )
}

export default App
