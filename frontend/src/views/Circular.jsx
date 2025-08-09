import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Circular.css";

const Circular = () => {
  const [circulars, setCirculars] = useState([]);
  const [visibleCirculars, setVisibleCirculars] = useState(4);
  const [viewMore, setViewMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [applicationModeFilter, setApplicationModeFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCirculars = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/posts");
        const data = await response.json();
        setCirculars(data);
      } catch (error) {
        console.error("Error fetching circulars:", error);
      }
    };

    fetchCirculars();
  }, []);

  const handleViewToggle = () => {
    if (viewMore) {
      setVisibleCirculars(filteredCirculars.length);
    } else {
      setVisibleCirculars(4);
    }
    setViewMore(!viewMore);
  };

  // Filtered job circulars based on search & filter options
  const filteredCirculars = circulars.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (departmentFilter === "" || job.department === departmentFilter) &&
      (applicationModeFilter === "" || job.application_mode === applicationModeFilter)
    );
  });

  return (
    <div className="circular-container">
      <h2>Job Circulars</h2>

      {/* Search and Filter Section */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by Job Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">All Departments</option>
          {[...new Set(circulars.map((job) => job.department))].map(
            (dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            )
          )}
        </select>

        <select
          value={applicationModeFilter}
          onChange={(e) => setApplicationModeFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">All Application Modes</option>
          {[...new Set(circulars.map((job) => job.application_mode))].map(
            (mode, index) => (
              <option key={index} value={mode}>
                {mode}
              </option>
            )
          )}
        </select>
      </div>

      {/* Job Circulars Grid */}
      <div className="circular-grid">
        {filteredCirculars.slice(0, visibleCirculars).map((job, index) => (
          <div className="circular-card" key={index}>
            <h3>{job.title}</h3>
            <p><strong>Department:</strong> {job.department}</p>
            <p><strong>Officer Grade:</strong> {job.grade}</p>
            <p><strong>Posted On:</strong> {job.posted_on}</p>
            <p><strong>Deadline:</strong> {job.deadline}</p>
            <p><strong>Application Mode:</strong> {job.application_mode}</p>

            {/* Job Attachment Section */}
            {job.attachments && (
              <p>
                <strong>Job Attachment:</strong>
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

            <button
              className="view-details bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {filteredCirculars.length > 4 && (
        <button className="view-toggle" onClick={handleViewToggle}>
          {viewMore ? "View More Circulars" : "View Less Circulars"}
        </button>
      )}
    </div>
  );
};

export default Circular;
