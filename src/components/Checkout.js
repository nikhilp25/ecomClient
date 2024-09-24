import React from "react";

function Checkout() {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="shipping-info">
          <h2>Checkout</h2>
          <div className="checkout-steps">
            <span className="step active">Address</span>
            <span className="step">Shipping</span>
            <span className="step">Payment</span>
          </div>
          <h3>Shipping Information</h3>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Apartment, suite, etc (optional)" />
            <input type="text" placeholder="City" />
            <div className="country-city-zip">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Zipcode" />
            </div>
            <input type="text" placeholder="Optional" />
            <label>
              <input type="checkbox" />
              Save contact information
            </label>
            <button type="submit">Continue to shipping</button>
          </form>
        </div>

        <div className="cart-summary">
          <h3>Your cart</h3>
          <div className="cart-item">
            <div className="item-details">
              <div className="item-image"></div>
              <div>
                <p>Men’s winter jacket</p>
                <p>Size: L</p>
                <p>Quantity: 1</p>
                <p>$99</p>
                <a href="/">Remove</a>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <div className="item-details">
              <div className="item-image"></div>
              <div>
                <p>Men’s winter jacket</p>
                <p>Size: L</p>
                <p>Quantity: 1</p>
                <p>$99</p>
                <a href="/">Remove</a>
              </div>
            </div>
          </div>
          <div className="cart-totals">
            <input type="text" placeholder="Enter coupon code here" />
            <div className="totals">
              <p>Subtotal: $200</p>
              <p>Shipping: Calculated at the next step</p>
              <p>Total: $200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
