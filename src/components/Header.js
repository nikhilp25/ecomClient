import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const cartItem = useSelector((store) => store.cart.items);
  const userDetail = useSelector((store) => store.auth);
  console.log(userDetail);

  let userName = "";
  if (userDetail.user !== null) {
    userName = userDetail.user.firstName;
  }
  // console.log(userDetail.user.firstName);
  // const userName = userDetail.user ? userDetail.user.firstName : "";

  return (
    <nav className="hero-nav">
      <ul>
        <li>
          <a href="/">Bobby's</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Stories</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <div className="hero-actions">
        <input type="text" placeholder="Search" />
        <Link to={"/cart"}>🛒 {cartItem.length} </Link>
        <Link to={"/login"}>{userName.length > 0 ? userName : "Login"}</Link>
      </div>
    </nav>
  );
}

export default Header;
