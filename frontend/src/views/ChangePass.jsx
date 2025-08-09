import { useState } from "react";

const ChangePass = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
  
    try {
      const token = localStorage.getItem("token"); // Get JWT token
  
      const response = await fetch("http://127.0.0.1:8000/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Use Bearer Token
        },
        body: JSON.stringify({
          currentPassword: oldPassword,
          newPassword: newPassword,
          newPassword_confirmation: confirmPassword
        })
      });
  
      const data = await response.json();
      
      if (response.ok) {
        alert("Password changed successfully!");
      } else {
        alert(data.message || "Failed to change password");
      }
      
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error changing password.");
    }
  };
  
  return (
    <div className="container">
      <div className="form-container">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
