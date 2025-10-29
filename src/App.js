import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Tickets from './components/Tickets';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/auth/:type" element={<Auth />} />
<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
<Route
path="/tickets"
element={
<ProtectedRoute>
<Tickets />
</ProtectedRoute>
}
/>
</Routes>
</Router>
);
}

export default App;

