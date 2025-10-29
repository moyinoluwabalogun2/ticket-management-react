import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Auth.css';

export default function Auth() {
const { type } = useParams();
const navigate = useNavigate();
const [form, setForm] = useState({ email: '', password: '' });
const [error, setError] = useState('');

const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = e => {
e.preventDefault();
const users = JSON.parse(localStorage.getItem('ticketapp_users')) || [];

if (type === 'signup') {
if (!form.email || !form.password) return setError('All fields required.');
if (users.find(u => u.email === form.email)) return setError('User already exists.');
users.push(form);
localStorage.setItem('ticketapp_users', JSON.stringify(users));
localStorage.setItem('ticketapp_session', form.email);
navigate('/dashboard');
} else {
const user = users.find(u => u.email === form.email && u.password === form.password);
if (!user) return setError('Invalid credentials.');
localStorage.setItem('ticketapp_session', form.email);
navigate('/dashboard');
}
};

return (
<div className="auth-container">
<form onSubmit={handleSubmit}>
<h2>{type === 'signup' ? 'Create Account' : 'Login'}</h2>
<input type="email" name="email" placeholder="Email" onChange={handleChange} />
<input type="password" name="password" placeholder="Password" onChange={handleChange} />
{error && <p className="error">{error}</p>}
<button type="submit">{type === 'signup' ? 'Sign Up' : 'Login'}</button>
</form>
</div>
);
}
