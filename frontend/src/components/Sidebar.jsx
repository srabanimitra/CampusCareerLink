import 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from 'react-icons/bs';
import './Sidebar.css';

// eslint-disable-next-line react/prop-types
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("admin_token");

      if (!token) {
        alert("Logged out succesfully!");
        navigate("/circular");
        return;
      }

      await axios.post(
        "http://127.0.0.1:8000/api/admin/logout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      localStorage.removeItem("admin_token"); // Remove token
      navigate("/admin/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar sidebar-responsive' : 'sidebar'}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/adminHome">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/adminCirculars">
            <BsFillGrid3X3GapFill className="icon" /> Circular
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/userManagement">
            <BsPeopleFill className="icon" /> Manage Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/applicationManagement"> 
            <BsListCheck className="icon" /> Applications Management
          </a>
        </li>
        <li className="sidebar-list-item">
          <button onClick={handleLogout} className="logout-btn">
             Log Out
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
