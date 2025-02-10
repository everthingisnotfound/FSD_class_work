import React, { useState } from "react";
import { saveUserData } from "./component/data";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserData(user);
    setIsRegistered(true);
  };

  return (
    <div className="app-container">
      {!isRegistered ? (
        <div className="registration-page">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        <div className="welcome-page">
          <h2>Welcome, {user.name}!</h2>
          <p>You have successfully registered.</p>
        </div>
      )}
    </div>
  );
};

export default App;
