import { Link } from "react-router-dom";

function NavBar() {

    return (
    <>
      <div className='header'>
        <div className='shop-name'>Some-shop</div>
        <div className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </>
    )
}

export default NavBar