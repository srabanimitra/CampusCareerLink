import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminCircular.css";
import Api from "../components/Api";
import AdminNavbar from "../components/AdminNavbar";

const AdminCircular = () => {
  const { http } = Api(); // Axios instance
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    grade: "",
    salary: "", // Salary is initially a string to prevent unwanted NaN issues
    posted_on: getTodayDate(),
    deadline: "",
    application_mode: "",
    attachments: null,
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, attachments: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: name === "salary" ? parseFloat(value) || "" : value,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      console.log("Sending Data:", Object.fromEntries(formDataToSend));
      const response = await http.post("/createpost", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Server Response:", response.data);

      if (response.status === 200 || response.status === 201) {
        setMessage("✔️ Circular posted successfully!");
        setTimeout(() => navigate("/manage-jobs"), 2000);
      } else {
        setMessage("⚠️ Failed to post circular.");
      }
    } catch (error) {
      console.error("Error posting circular:", error.response?.data || error);
      setMessage(
        `⚠️ ${
          error.response?.data?.message || "Server error. Try again later."
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-circular-page">
      <AdminNavbar />
      <div className="admin-circular-container">
        <h2 className="title">Post a Job Circular</h2>
        {message && <p className="message">{message}</p>}

        <form onSubmit={submitForm} className="circular-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleChange}
              value={formData.department}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="grade"
              placeholder="Officer Grade"
              onChange={handleChange}
              value={formData.grade}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              onChange={handleChange}
              value={formData.salary}
              required
            />
          </div>

          <div className="form-group">
            <input type="date" name="posted_on" value={formData.posted_on} disabled />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="deadline"
              onChange={handleChange}
              value={formData.deadline}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="application_mode"
              placeholder="Application Mode"
              onChange={handleChange}
              value={formData.application_mode}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="file"
              name="attachments"
              accept="application/pdf"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Circular"}
            </button>
          </div>

          <button
            type="button"
            className="submit-btn2"
            onClick={() => navigate("/manage-jobs")}
          >
            Manage Circulars
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCircular;
