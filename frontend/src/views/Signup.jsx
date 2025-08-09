import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { fullName, email, password, confirmPassword } = formData;
  
    if (!fullName || !email || !password || !confirmPassword) {
      setError("⚠️ Please fill in all fields!");
      return;
    }
  
    if (!email.includes("@gmail.com")) {
      setError("⚠️ Please use a valid email!");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("⚠️ Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullName,
          email,
          password,
          password_confirmation: confirmPassword, // Required for Laravel's 'confirmed' rule
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup successful! Please log in.");

        setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });

        setError("");
        //navigate('/');
        navigate('/login');
      } else {
        setError(data.error ? Object.values(data.error).join("\n") : "Signup failed");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("⚠️ Network error, please try again!");
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
