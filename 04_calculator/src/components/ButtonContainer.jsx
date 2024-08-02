import Buttons from "./Buttons";

function ButtonContainer({onClickChange}) {
  const buttonNameArray= ['C','1',"2",'+',"3","4",'-',"5","6",'*','7',"8",'/','=',"9","0",'.']

  return (
          <div id="buttonContainer" className='flex justify-center flex-wrap w-56 gap-3'>
            {buttonNameArray.map((buttName)=><Buttons buttonName={buttName} onClickChange={onClickChange}></Buttons>)}
          </div>
  )
}

export default ButtonContainer