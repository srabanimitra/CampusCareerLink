import "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Home.css";
import "../aust.css";

const Home = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  // This will navigate to the Circular page when "Explore Now" is clicked
  const handleExploreClick = () => {
    navigate("/circular");  // Navigate to the Circular page
  };

  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <h1>AHSANULLAH UNIVERSITY OF SCIENCE & TECHNOLOGY</h1>
          <p className="job-portal-text">Job Portal</p>
          <p className="university-address">Dhaka-1208, Bangladesh</p>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
