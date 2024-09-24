import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetail = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      mobileNo: mobileNo,
      username: username,
    };
    const resp = await axios.post(
      "http://localhost:8000/api/v1/user/signup",
      userDetail
    );
    console.log(resp.data.token);
    const token = resp.data.token;
    localStorage.setItem("accessToken", token);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome to Bobby's</h2>
        <p>Please register</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
