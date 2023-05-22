import React, { useState } from "react";
import "../css/Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data); // Check the response data in the console

      if (response.ok) {
        setLoginError("");
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      console.error("Failed to login", error);
      setLoginError("Failed to login");
    }
  };

  return (
    <div className="AuthContainer">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {loginError && <p className="error">{loginError}</p>}
    </div>
  );
}
