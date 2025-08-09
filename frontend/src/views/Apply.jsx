// Apply.jsx

import  { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Apply.css";

const Apply = () => {
  const location = useLocation();
  const { jobId, jobTitle } = location.state || {}; // Retrieve job ID and title from location state

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const [cv, setCv] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@gmail.com")) {
      setError("⚠️ Please use a valid Gmail account!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("job_id", jobId); // Add job ID
    formDataToSend.append("job_title", jobTitle); // Add job title
    if (cv) {
      formDataToSend.append("cv", cv);
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/apply", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Application submitted successfully!");
        navigate("/"); // Redirect to home page
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("⚠️ Error submitting application.");
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-form">
        <h2>Apply for Job: {jobTitle}</h2> {/* Display Job Title */}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
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
              placeholder="Enter your Gmail"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="cv">Upload CV (PDF only)</label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="apply-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
