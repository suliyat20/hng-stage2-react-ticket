import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "test@hng.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("ticketapp_session", "fake-session-token");
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials — try test@hng.com / 12345");
    }
  };

  return (
<div className="login-container">
<div className="login-box">
<h2>Welcome Back 👋</h2>
<form onSubmit={handleLogin}>
<label>Email</label>
<input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

<label>Password</label>
<input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

<button type="submit">Login</button>
</form>

<p>Don’t have an account? <a href="/signup">Sign up</a></p>
</div>
</div>
  );
}

export default Login;


