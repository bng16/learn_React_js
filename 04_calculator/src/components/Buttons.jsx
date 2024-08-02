function Buttons({ buttonName, onClickChange }) {
  return (
    <button className="btn btn-info w-16 text-cyan-50" onClick={()=>onClickChange(buttonName)}>{buttonName}</button>
  )
}

export default Buttons