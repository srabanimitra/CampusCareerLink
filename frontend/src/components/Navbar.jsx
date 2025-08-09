import  { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "../logo.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(""); // Added state for username
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated from localStorage
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    // Retrieve the user's name from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    // Remove user authentication details from localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName"); // Clear username on logout

    // Reset state and redirect to home page
    setIsAuthenticated(false);
    setUserName(""); // Reset username state
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="AUST Logo" className="logo" />
        <h2>CampusCareerLink</h2>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleMenuItemClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/circular" onClick={handleMenuItemClick}>
            Circular
          </Link>
        </li>
        
        {isAuthenticated && (
          <li>
            <Link to="/profile-page" onClick={handleMenuItemClick}>
              Profile
            </Link>
          </li>
        )}
        <li>
          <Link to="/admin" onClick={handleMenuItemClick}>
            Admin Login
          </Link>
        </li>
        <li>
          <Link to="/guideline" onClick={handleMenuItemClick}>
            Guideline
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleMenuItemClick}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        {isAuthenticated ? (
          <div className="profile-section">
            <Link to="/profile" className="profile-icon">
              <span role="img" aria-label="User Icon">
                👤
              </span>{" "}
              {userName} {/* Display username here */}
            </Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
