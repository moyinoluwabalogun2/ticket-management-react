import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Tickets.css';

export default function Tickets() {
const [tickets, setTickets] = useState(JSON.parse(localStorage.getItem('tickets')) || []);
const [form, setForm] = useState({ title: '', description: '', status: 'open' });
const [error, setError] = useState('');
const [editing, setEditing] = useState(null);

const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSave = () => {
if (!form.title || !form.status) return setError('Title and status are required.');
let updated;
if (editing !== null) {
updated = tickets.map((t, i) => (i === editing ? form : t));
setEditing(null);
} else {
updated = [...tickets, form];
}
setTickets(updated);
localStorage.setItem('tickets', JSON.stringify(updated));
setForm({ title: '', description: '', status: 'open' });
setError('');
};

const handleEdit = i => {
setForm(tickets[i]);
setEditing(i);
};

const handleDelete = i => {
if (window.confirm('Delete this ticket?')) {
const updated = tickets.filter((_, idx) => idx !== i);
setTickets(updated);
localStorage.setItem('tickets', JSON.stringify(updated));
}
};

return (
<div className="tickets">
<Navbar />
<div className="ticket-form">
<h3>{editing !== null ? 'Edit Ticket' : 'Create Ticket'}</h3>
<input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
<textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
<select name="status" value={form.status} onChange={handleChange}>
<option value="open">Open</option>
<option value="in_progress">In Progress</option>
<option value="closed">Closed</option>
</select>
{error && <p className="error">{error}</p>}
<button onClick={handleSave}>{editing !== null ? 'Update' : 'Create'}</button>
</div>

<div className="ticket-list">
{tickets.map((t, i) => (
<div key={i} className={`ticket-card ${t.status}`}>
<h4>{t.title}</h4>
<p>{t.description}</p>
<span className="status">{t.status}</span>
<div className="actions">
<button onClick={() => handleEdit(i)}>Edit</button>
<button onClick={() => handleDelete(i)}>Delete</button>
</div>
</div>
))}
</div>
</div>
);
}