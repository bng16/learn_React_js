import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

function CalculatorBody() {

  const [val,setVal]=useState('');

  const onClickChange=(clicked)=>{
    if (clicked==='C'){
      setVal("");
    }else if(clicked==='='){
      setVal(eval(val));
    }else{
      setVal(val+clicked);
    }
  }


  return (
    <div id="calculatorBody" className='w-[300px] h-[500px] bg-white rounded-md p-2 pt-8 flex items-center flex-col gap-6'>
          <Display displayValue={val}/>
          <ButtonContainer onClickChange={onClickChange}/>
    </div>
  )
}

export default CalculatorBody