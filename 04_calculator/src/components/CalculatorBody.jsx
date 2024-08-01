import Display from "./Display";
import ButtonContainer from "./ButtonContainer";

function CalculatorBody() {
  return (
    <div id="calculatorBody" className='w-[300px] h-[500px] bg-white rounded-md p-2 pt-8 flex items-center flex-col gap-6'>
          <Display/>
          <ButtonContainer/>
    </div>
  )
}

export default CalculatorBody