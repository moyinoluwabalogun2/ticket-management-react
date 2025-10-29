import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Dashboard.css';

export default function Dashboard() {
const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
const total = tickets.length;
const open = tickets.filter(t => t.status === 'open').length;
const resolved = tickets.filter(t => t.status === 'closed').length;

return (
<div className="dashboard">
<Navbar />
<div className="stats-container">
<div className="card green">
<h3>Total Tickets</h3>
<p>{total}</p>
</div>
<div className="card amber">
<h3>Open Tickets</h3>
<p>{open}</p>
</div>
<div className="card gray">
<h3>Resolved Tickets</h3>
<p>{resolved}</p>
</div>
</div>
<Link to="/tickets" className="btn">Manage Tickets</Link>
</div>
);
}
