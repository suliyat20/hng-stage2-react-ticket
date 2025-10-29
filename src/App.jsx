import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";

function App() {
  return (
<Router>
  <Routes>
<Route path="/" element={<Landing />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/tickets" element={<Tickets />} />
</Routes>
</Router>
  );
}

export default App;






