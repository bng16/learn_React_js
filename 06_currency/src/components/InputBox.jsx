
function InputBox({label, readOnly, placeHolder, allNames, currency, set, amount, setAmount,ph}) {




  return (
    <form >
      <label className="text-black/40 mb-2 inline-block">{label}:</label>
      <div>
        <input type="number" readOnly={readOnly} placeholder={ph} className="bg-slate-100 h-8 rounded-md mx-2 px-2 text-sm " value={amount===0?'':amount} onChange={(e)=>setAmount(e.target.value)} />
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={currency} onChange={(e)=>set(e.target.value)} >
        {allNames.map((value)=><option key={value} >{value}</option>)}
          
        </select>
      </div>
    </form>
  )
}

export default InputBox