import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const prdData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemove = (data) => {
    dispatch(removeItem(data));
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [city1, setCity1] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [grandTotal, setGrandTotal] = useState(0);
  const handlePayment = async (e) => {
    e.preventDefault();
    const userAddress = {
      addressLine1: address,
      addressLine2: address2,
      city: city,
      country: country,
      city1,
      postalCode: zipCode,
      telephoneNo: mobileNo,
      mobileNo: mobileNo,
    };

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer  ${token}` },
    };
    const cartItem = getCartData();

    const resp = await Promise.all([
      await axios.post(
        "http://localhost:8000/api/v1/user/userAddress",
        userAddress,
        config
      ),
      await axios.post(
        "http://localhost:8000/api/v1/payment/checkout",
        cartItem,
        config
      ),
    ]);
    console.log(resp);
    const paymentURL = resp[1].data.url;
    console.log(paymentURL);
    window.location = paymentURL;
  };
  const getCartData = () => {
    let cartItem = [];
    prdData.map((data) => {
      const obj = {
        name: data.name,
        price: data.price,
        quantity: data.SKU,
      };
      cartItem.push(obj);
    });
    console.log({ cartItem: cartItem });
    return cartItem;
  };
  const getTotal = () => {
    let total = 0;
    prdData.map((data) => {
      return (total += data.price);
    });
    console.log(prdData);

    setGrandTotal(total);
  };
  useEffect(() => {
    getTotal();
  }, [prdData]);
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
          <form onSubmit={handlePayment}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc (mobileNo)"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <div className="country-city-zip">
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="City"
                value={city1}
                onChange={(e) => setCity1(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Zipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="mobileNo"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
            <label>
              <input type="checkbox" />
              Save contact information
            </label>
            <button type="submit">Continue to Payment</button>
          </form>
        </div>

        <div className="cart-summary">
          <h3>Your cart</h3>
          {prdData.map((data) => {
            return (
              <div className="cart-item">
                <div className="item-details">
                  <div className="item-image"></div>
                  <div>
                    <p>{data.desc}</p>
                    <p>{data.name}</p>
                    <p>${data.price}</p>
                  </div>
                  <button onClick={() => handleRemove(data)}>Remove</button>
                </div>
              </div>
            );
          })}
          <div className="cart-totals">
            <input type="text" placeholder="Enter coupon code here" />
            <div className="totals">
              <p>Total: ${grandTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
