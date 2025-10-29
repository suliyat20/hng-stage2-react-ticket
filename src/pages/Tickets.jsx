import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tickets.css";

function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");
  const [editIndex, setEditIndex] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("ticketapp_session");
    if (!token) {
      alert("Unauthorized access — please login first.");
      navigate("/login");
    }

    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !status) {
      setMessage("Title and status are required!");
      return;
    }

    const newTicket = { title, description, status };

    let updatedTickets;
    if (editIndex !== null) {
      updatedTickets = [...tickets];
      updatedTickets[editIndex] = newTicket;
      setEditIndex(null);
      setMessage("Ticket updated successfully!");
    } else {
      updatedTickets = [...tickets, newTicket];
      setMessage("Ticket created successfully!");
    }

    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    setTitle("");
    setDescription("");
    setStatus("open");
  };

  const handleEdit = (index) => {
    const t = tickets[index];
    setTitle(t.title);
    setDescription(t.description);
    setStatus(t.status);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      const updatedTickets = tickets.filter((_, i) => i !== index);
      setTickets(updatedTickets);
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
      setMessage("Ticket deleted successfully!");
    }
  };

  return (
<div className="tickets-page">
<header>
<h2>Ticket Management</h2>
<button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
</header>

<form className="ticket-form" onSubmit={handleSubmit}>
<h3>{editIndex !== null ? "Edit Ticket" : "Create New Ticket"}</h3>

<input
          type="text"
          placeholder="Ticket Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

<textarea
          placeholder="Ticket Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
></textarea>

<select value={status} onChange={(e) => setStatus(e.target.value)} required>
<option value="open">Open</option>
<option value="in_progress">In Progress</option>
<option value="closed">Closed</option>
</select>

        {message &&<p className="message">{message}</p>}

<button type="submit">{editIndex !== null ? "Update Ticket" : "Add Ticket"}</button>
</form>

<div className="ticket-list">
        {tickets.length === 0 ? (
<p>No tickets yet.</p>
        ) : (
          tickets.map((ticket, index) => (
<div className={`ticket-card ${ticket.status}`} key={index}>
<h4>{ticket.title}</h4>
<p>{ticket.description}</p>
<span className="status">{ticket.status}</span>
<div className="actions">
<button onClick={() => handleEdit(index)}>Edit</button>
<button onClick={() => handleDelete(index)}>Delete</button>
</div>
</div>
          ))
        )}
</div>
</div>
  );
}

export default Tickets;

