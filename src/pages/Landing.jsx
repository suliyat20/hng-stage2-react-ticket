import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

export default function Landing() {
  return (
<div className="landing">
<Navbar />

<section className="hero">
<img src="/circle-1.svg" alt="decorative circle" className="circle circle1" />
<img src="/circle-2.svg" alt="decorative circle" className="circle circle2" />

<div className="hero-content">
<h1>Welcome to TicketApp</h1>
<p>Manage all your tickets easily — create, track, and resolve issues fast!</p>
<div className="buttons">
<a href="/login" className="btn-primary">Login</a>
<a href="/signup" className="btn-secondary">Get Started</a>
</div>
</div>

<img src="/wave.svg" alt="wave background" className="wave" />
</section>

<Footer />
</div>
  );
}
