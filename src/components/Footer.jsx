
import React from "react";

export default function Footer() {
  return (
<footer style={{ textAlign: "center", padding: "30px 0", background: "#f9fafb" }}>
<p>© {new Date().getFullYear()} TicketApp. All rights reserved.</p>
</footer>
  );
}
