import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem('ticketapp_session');
navigate('/');
};

return (
<nav className="navbar">
<h2>TicketFlow</h2>
<div className="nav-links">
<Link to="/dashboard">Dashboard</Link>
<Link to="/tickets">Tickets</Link>
<button onClick={handleLogout} className="logout-btn">Logout</button>
</div>
</nav>
);
}