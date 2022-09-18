import React, { useState } from "react";
import { useTodo } from "../context/appContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { createUser, loading } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3) {
      alert("Username must be at least three character length.");
    } else {
      createUser(username);
    }
  };

  return (
    <div className="page">
      <section className="section">
        <h3 className="title">Login</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              placeholder="Please provide a username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button
              type="submit"
              className="login-btn"
              disabled={username.length < 1}
            >
              {loading ? "Please Wait..." : "Login"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;