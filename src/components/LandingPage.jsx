import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

export default function LandingPage() {
return (
<div className="landing">
<header className="hero">
<div className="circle"></div>
<h1>Welcome to TicketFlow</h1>
<p>Manage, track, and resolve tickets efficiently.</p>
<div className="cta">
<Link to="/auth/login" className="btn">Login</Link>
<Link to="/auth/signup" className="btn secondary">Get Started</Link>
</div>
<img src="/hero-wave.svg" alt="wave" className="wave" />
</header>
<footer className="footer">© 2025 TicketFlow</footer>
</div>
);
}
