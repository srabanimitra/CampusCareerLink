import  { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import AdminNavbar from '../components/AdminNavbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles
import ManageCircular from './ManageCircular'; // Import the ManageCircular component
import './AdminHome.css';

function AdminHome() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0); // Track the total number of users
  const [applicationCount, setApplicationCount] = useState(0); // Track the number of job applications
  const [date, setDate] = useState(new Date()); // State for the selected date

  // Fetching user data from backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Fetching total number of users
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user-count');
        setUserCount(response.data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };
    fetchUserCount();
  }, []);

  // Fetching total number of job applications
  useEffect(() => {
    const fetchApplicationCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/application-count');
        setApplicationCount(response.data.count);
      } catch (error) {
        console.error('Error fetching application count:', error);
      }
    };
    fetchApplicationCount();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  // Function to handle the calendar date change
  const onDateChange = newDate => {
    setDate(newDate);
  };

  return (
    <div className="admin-home-wrapper">
      <AdminNavbar />
      <Sidebar />

      <div className="admin-home-container">
        {/* Admin Home Content */}
        <div className="admin-home-content">
          
          {/* Displaying User and Application Counts */}
          <div className="admin-home-stats">
            <div className="stats-box">
              <h4>Total Users</h4>
              <p>{userCount}</p>
            </div>
            <div className="stats-box">
              <h4>Total Applications</h4>
              <p>{applicationCount}</p>
            </div>
          </div>

          {/* User List Table */}
          <div className="admin-home-user-list">
            <h4>Users Management</h4>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Calendar Component (Side-by-side with User Management) */}
          <div className="admin-home-calendar">
            <h4>Calendar</h4>
            <Calendar
              onChange={onDateChange}  // Handle date change
              value={date}  // Set the selected date
            />
          </div>
        </div>

        {/* Manage Circular Section (Under User Management) */}
        <div className="admin-home-circular-management">
          <ManageCircular />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
