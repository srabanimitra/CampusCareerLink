import  { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error("Error fetching users:", error));
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

  return (
    <div className="admin-home-container">
      <AdminNavbar />
      <Sidebar />
      <div className="admin-home-wrapper">
        <h3>User Management</h3>
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
    </div>
  );
};

export default UserManagement;