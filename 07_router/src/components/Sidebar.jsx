import { Link } from "react-router-dom"

function Sidebar() {
  const arr=[1,2,3,4,5,6,7,8,9,10,11]
  return (
    arr.map((num)=><Link>profile {num}</Link>)
  )
}

export default Sidebar