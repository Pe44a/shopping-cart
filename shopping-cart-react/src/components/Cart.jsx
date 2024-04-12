import NavBar from "./NavBar"
import { Link } from "react-router-dom"

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem('itemData'));

  function handleCheckout() {
    let data = JSON.parse(localStorage.getItem('itemData'))
    data = [];
    localStorage.setItem('itemData', JSON.stringify(data));

    alert("Checkout successful");
  }

    return (
      <>
        <NavBar/>

        {cartItems.length < 1 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <Link to="/shop">Shop</Link>
            </div>
          ) : (
            <> 
            <div className="cart-items">
              {cartItems.map((product) => (
                <>
                  <div className="check-out-container">
                    <div className="check-out-img">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="check-out-description">
                      <div>
                        <div>{product.title}</div>
                        <div>{product.category}</div>
                      </div>
                      <div>
                        <div>Price: {product.price}$</div>
                        <div>Amount: {product.amount}</div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="check-out-btn-container">
              <button className="checkout-btn" onClick={() => handleCheckout()} >Checkout</button>
            </div>

            </>
          )}
      
          
      </>
    )
  }
  
  export default Cart