import  { useEffect } from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  useEffect(() => {
    // Ensure the footer appears at the bottom after content has loaded
    setTimeout(() => {
      document.querySelector('.footer').classList.add('show');
    }, 100); // Delay to let content load first
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information - Left Side */}
        <div className="footer-contact">
          <p>Ahsanullah University of Science & Technology</p>
          <p>141 & 142, Love Road, Tejgaon Industrial Area, Dhaka-1208</p>
          <p>
            Tel: <a href="tel:+88028870422">+8802-8870422</a>
          </p>
          <p>
            Email: <a href="mailto:info@aust.edu" className="email-link">info@aust.edu</a>
          </p>
        </div>

        {/* Research, Advocacy, Innovation - Center */}
        <div className="footer-middle">
          <Link to="/research" className="footer-button">Research</Link>  {/* Use Link here */}
          <Link to="/advocacy" className="footer-button">Advocacy</Link>  {/* Use Link here */}
          <Link to="/innovation" className="footer-button">Innovation</Link>  {/* Keep only this link for Innovation */}
        </div>

        {/* Social Media Links - Right Side */}
        <div className="footer-social">
          <h4>FOLLOW US AT</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/AUST.Official" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/AUST_Official" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.linkedin.com/school/ahsanullah-university-of-science-and-technology/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/aust.official/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
