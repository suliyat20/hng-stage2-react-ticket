import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [openCount, setOpenCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("ticketapp_session");
    if (!token) {
      alert("Your session has expired — please log in again.");
      navigate("/login");
    }

    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
    setOpenCount(savedTickets.filter((t) => t.status === "open").length);
    setClosedCount(savedTickets.filter((t) => t.status === "closed").length);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/login");
  };

  return (
<div className="dashboard">
<header>
<h2>Dashboard</h2>
<button onClick={handleLogout}>Logout</button>
</header>

<div className="stats">
<div className="card green">
<h3>Total Tickets</h3>
<p>{tickets.length}</p>
</div>
<div className="card amber">
<h3>Open Tickets</h3>
<p>{openCount}</p>
</div>
<div className="card gray">
<h3>Closed Tickets</h3>
<p>{closedCount}</p>
</div>
</div>

<button className="manage-btn" onClick={() => navigate("/tickets")}>
        Go to Ticket Management
</button>
</div>
  );
}

export default Dashboard;

