import { NavLink, Outlet } from "react-router-dom"

function Sidebar() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-4">
        {arr.map((num) => (
          <NavLink key={num} to={`/sidebar/profile/${num}`} className={({isActive})=>isActive? 'text-orange-400 font-bold':''}>Profile {num}</NavLink>
        ))}
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Sidebar
