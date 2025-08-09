import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ViewDetails.css"; // Import the CSS file

const ViewDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const navigate = useNavigate();
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Job not found");
        }
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center error">Error: {error}</p>;

  return (
    <div className="container">
      {/* Title Section */}
      <div className="title-container">
        <h2>{job.title}</h2>
      </div>

      {/* Job Details Section */}
      <div className="details-container">
        <p><strong>Department:</strong> {job.department}</p>
        <p><strong>Officer Grade:</strong> {job.grade}</p>
        <p><strong>Salary:</strong> {job.salary ? parseFloat(job.salary).toFixed(2) : "Not Provided"}</p>
        <p><strong>Posted On:</strong> {job.posted_on}</p>
        <p><strong>Deadline:</strong> {job.deadline}</p>
        <p><strong>Application Mode:</strong> {job.application_mode}</p>

        {/* Job Attachment Section */}
        {job.attachments && (
          <p><strong>Job Attachment:</strong> 
            <a 
              href={`http://127.0.0.1:8000/storage/${job.attachments}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="attachment-link"
            >
              Download Job PDF
            </a>
          </p>
        )}

        {/* Apply Button */}
      

<button
  className="apply-button"
  onClick={() =>
    navigate("/apply", {
      state: { jobId: job.id, jobTitle: job.title }, // Pass job ID and title
    })
  }
>
  Apply Now
</button>


      </div>
    </div>
  );
};

export default ViewDetails;
