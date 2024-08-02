
function Display({displayValue}) {
  return (
    <input type="text" name="display" id="display"  readOnly className='bg-slate-50 border border-black w-[250px] h-[60px] text-[30px] rounded-md p-2' value={displayValue}/>
  )
}

export default Display