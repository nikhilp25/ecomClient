import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, logout } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(logout());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetail = {
      email: email,
      password: password,
    };
    dispatch(loginUser(userDetail));
    navigate("/");
  };
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  <div className="logoutBtn">
    <button type="submit">Logout</button>
  </div>;
  return (
    <div className="login-page">
      <div className="login-container">
        {isAuthenticated ? (
          <div>
            <button type="submit" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h2>Welcome Back</h2>
            <p>Login with email</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="login-options">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember me
                </label>
                <a href="/">Forgot Password?</a>
              </div>
              <button type="submit">Login</button>
            </form>
            {error && <div style={{ color: "red" }}>{error.message}</div>}
            <p>
              Or
              <Link to={"/signup"}> create an account </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
