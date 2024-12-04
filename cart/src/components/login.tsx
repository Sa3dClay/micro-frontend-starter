import React, { useState } from "react";
import { login, useLoggedIn } from "../apis/cart";

import "./login.scss";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <div className="login-container">
      <button onClick={() => setShowLogin(!showLogin)}>
        <i
          className="ri-fingerprint-line login-icon"
          data-testid="show-login-icon"
        ></i>
      </button>

      {showLogin && (
        <div className="login-box">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="login-input"
          />
          <button
            className="login-submit"
            onClick={() => login(username, password)}
            data-testid="login-btn"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
