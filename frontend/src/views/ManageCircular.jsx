import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../components/Api";
import "./ManageCircular.css";

const ManageCircular = () => {
  const { http } = Api();
  const navigate = useNavigate();
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    fetchCirculars();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await http.get("/posts");
      setCirculars(response.data);
    } catch (error) {
      console.error("Error fetching circulars:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this circular?")) return;
    try {
      await http.delete(`/posts/${id}`);
      setCirculars(circulars.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting circular:", error);
    }
  };

  return (
    <div className="manage-circular-container">
      <h2>Manage Job Circulars</h2>
      <table className="circular-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Department</th>
            <th>Grade</th>
            <th>Posted On</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.department}</td>
              <td>{job.grade}</td>
              <td>{job.posted_on}</td>
              <td>{job.deadline}</td>
              <td>
                <button onClick={() => navigate(`/edit-job/${job.id}`)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(job.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCircular;
