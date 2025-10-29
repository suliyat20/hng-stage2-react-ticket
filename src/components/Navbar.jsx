import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
<nav className="navbar">
<h1 className="logo">🎟 TicketApp</h1>
<div className="nav-links">
<a href="/login">Login</a>
<a href="/signup" className="btn-primary">Get Started</a>
</div>
</nav>
  );
}
