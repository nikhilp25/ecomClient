import React from "react";

function Cart() {
  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Your cart</h2>
        <p>
          Not ready to checkout? <a href="/">Continue Shopping</a>
        </p>

        <div className="cart-item">
          <div className="cart-item-image"></div>
          <div className="cart-item-details">
            <p>Men's winter jacket</p>
            <p>Size: L</p>
            <p>Quantity: 1</p>
            <p>$99</p>
            <a href="/" className="remove-item">
              Remove
            </a>
          </div>
        </div>

        <div className="cart-item">
          <div className="cart-item-image"></div>
          <div className="cart-item-details">
            <p>Men's winter jacket</p>
            <p>Size: L</p>
            <p>Quantity: 1</p>
            <p>$99</p>
            <a href="/" className="remove-item">
              Remove
            </a>
          </div>
        </div>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <input type="text" placeholder="Enter coupon code here" />
        <div className="summary-details">
          <p>
            Subtotal: <span>$200</span>
          </p>
          <p>
            Shipping: <span>Calculated at the next step</span>
          </p>
          <p>
            Total: <span>$200</span>
          </p>
        </div>
        <button>Continue to checkout</button>
      </div>

      <div className="order-information">
        <h2>Order Information</h2>
        <div className="accordion">
          <div className="accordion-item">
            <h3>Return Policy</h3>
            <div className="accordion-content">
              <p>
                This is our example return policy which is everything you need
                to know about our returns.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h3>Shipping Options</h3>
            <div className="accordion-content">
              <p>Details about shipping options go here.</p>
            </div>
          </div>
          <div className="accordion-item">
            <h3>Shipping Options</h3>
            <div className="accordion-content">
              <p>Details about shipping options go here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
