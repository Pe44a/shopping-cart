import NavBar from "./NavBar"
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <>
      <NavBar/>

      <div className='main'>
        <Link className="shopLink" to="/shop">Shop now</Link>
      </div>
    </>
  )
}

export default HomePage