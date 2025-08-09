// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="admin-nav-list">
        <li><Link to="/adminHome">Dashboard</Link></li>
        <li><Link to="/adminCirculars">Circulars</Link></li>
        
        <li><Link to="/userManagement">Manage User</Link></li>
        <li><Link to="/applicationManagement">Application Management</Link></li>
       

      </ul>
    </nav>
  );
};

export default AdminNavbar;
