import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import checkMarkIcon from '../assets/check-mark.png';

function NavBar() {
  const [itemAdded, setItemAdded] = useState("");

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("itemData")) || [];
    if (localData.length > 0) {
      setItemAdded(checkMarkIcon);
    }
  }, []);

    return (
    <>
      <div className="header">
        <div className="shop-name">Some-shop</div>
        <div className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">
            Shop
           <img src={itemAdded} alt="" /> 
          </Link>
        </div>
      </div>
    </>
    )
}

export default NavBar