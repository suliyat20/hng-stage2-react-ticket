import React, { useState } from "react";
import "./Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("ticketapp_user", JSON.stringify(newUser));
    setMessage("Signup successful! Redirecting to login...");

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
<div className="auth-container">
<h2>Sign Up</h2>
<form onSubmit={handleSignup}>
<input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

<input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

<input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {message &&<p className="message">{message}</p>}

<button type="submit">Sign Up</button>

<p>
          Already have an account? <a href="/login">Login</a>
</p>
</form>
</div>
  );
}

export default Signup;

