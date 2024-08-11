import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404 page not found</h1>
      <Link to={"/"}>Home</Link>
    </>
  )
}

export default NotFound