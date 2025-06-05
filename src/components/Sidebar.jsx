import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{ width: '200px', padding: '20px', background: '#eee', height: '100vh' }}>
    <h2>Admin</h2>
    <nav>
      <Link to="/">Dashboard</Link><br />
      <Link to="/calendar">Calendar</Link><br />
      <Link to="/kanban">Kanban</Link><br />
      <Link to="/charts">Charts</Link><br />
      <Link to="/table">Table</Link><br />
    </nav>
  </div>
);

export default Sidebar;
