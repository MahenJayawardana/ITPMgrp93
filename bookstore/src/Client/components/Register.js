import React, { useState } from "react";
import Axios from "axios";
import "../css/Auth.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistered, setIsRegistered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    Axios.post("http://localhost:3001/users/register", {
      username: username, // Include the username field
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        setIsRegistered(true);
        setShowPopup(true);
        setUsername(""); // Clears the username field
        setEmail(""); // Clears the email field
        setPassword(""); // Clears the password field
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="AuthContainer">
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      {showPopup && (
        <>
          <div className="Overlay"></div>
          <div className="Popup">
            <p>Successfully Registered</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </>
      )}
    </div>
  );
}
