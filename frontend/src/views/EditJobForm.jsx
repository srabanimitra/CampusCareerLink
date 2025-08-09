import  { useState, useEffect } from "react";
import "./EditJobForm.css"; // Import CSS styles
import { useNavigate } from "react-router-dom"; 
// eslint-disable-next-line react/prop-types
const EditJobForm = ({ job, onUpdate }) => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
    title: "",
    department: "",
    grade: "",
    posted_on: "",
    deadline: "",
    application_mode: "",
  });

  useEffect(() => {
    if (job) {
      setFormData({
        // eslint-disable-next-line react/prop-types
        title: job.title,
        // eslint-disable-next-line react/prop-types
        department: job.department,
        // eslint-disable-next-line react/prop-types
        grade: job.grade,
        // eslint-disable-next-line react/prop-types
        posted_on: job.posted_on,
        // eslint-disable-next-line react/prop-types
        deadline: job.deadline,
        // eslint-disable-next-line react/prop-types
        application_mode: job.application_mode,
      });
    }
  }, [job]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Pass updated data to parent
  };
  
  return (
    <div className="edit-job-form-container">
      <h2>Edit Job Circular</h2>
      <form onSubmit={handleSubmit} className="edit-job-form">
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Grade</label>
          <input type="text" name="grade" value={formData.grade} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Posted On</label>
          <input type="date" name="posted_on" value={formData.posted_on} disabled />
        </div>

        <div className="form-group">
          <label>Deadline</label>
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Application Mode</label>
          <input type="text" name="application_mode" value={formData.application_mode} onChange={handleChange} required />
        </div>

        <div className="form-buttons">
          <button type="submit" className="update-btn">Update Job</button>
<button type="button" className="cancel-btn" onClick={() => navigate("/manage-jobs")}>Cancel</button>        </div>
      </form>
    </div>
  );
};

export default EditJobForm;
