import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [grandTotal, setGrandTotal] = useState(0);
  const navigate = useNavigate();
  const prdData = useSelector((state) => state.cart.items);
  const getTotal = () => {
    let total = 0;
    prdData.map((data) => {
      return (total += data.price);
    });
    setGrandTotal(total);
  };
  useEffect(() => {
    getTotal();
  }, [prdData]);

  const dispatch = useDispatch();
  const handleRemove = (data) => {
    dispatch(removeItem(data));
  };
  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Your cart</h2>
        <p>
          Not ready to checkout? <a href="/">Continue Shopping</a>
        </p>
        {prdData.map((data) => {
          return (
            <div key={data.id * Math.random()} className="cart-item">
              <div className="cart-item-image"></div>
              <div className="cart-item-details">
                <p>{data.desc}</p>
                <p>{data.name}</p>
                <p>${data.price}</p>
                <button onClick={() => handleRemove(data)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <input type="text" placeholder="Enter coupon code here" />
        <div className="summary-details">
          <p>
            Total: <span>${grandTotal}</span>
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Continue to checkout
        </button>
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
