import React, { useEffect, useState } from "react";
import "../css/Profile.css";

const UserProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/users/getUser", { credentials: "include" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="UserProfile">
      <h2>User Profile</h2>
      <div className="UserDetails">
        <div>
          <label>Username:</label>
          <span>{user.username}</span>
        </div>
        <div>
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
