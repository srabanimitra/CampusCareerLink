import 'react';
import './ContactUs.css'; // Your styles for the contact page
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import Facebook and LinkedIn icons

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-title">Get in Touch</h2>

      {/* Contact Layout */}
      <div className="contact-layout">
        {/* Map */}
        <div className="map-container">
          {/* Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.539515663056!2d90.4042108757445!3d23.763794988261253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c790e6cf50a9%3A0xcae56c17297f85f8!2sAhsanullah%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1738406527289!5m2!1sen!2sbd"
            width="100%" 
            height="500px" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Ahsanullah University Map"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p><strong>Address:</strong> Ahsanullah University of Science and Technology (AUST), Tejgaon, Dhaka, Bangladesh</p>
          <p><strong>Email:</strong> <a href="mailto:info@aust.edu.bd">info@aust.edu.bd</a></p>
          <p><strong>Phone:</strong> <a href="tel:+88028872657">+880 2-887-2657</a></p>

          {/* Follow Us Section */}
          <div className="follow-us">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/austbd" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} color="#3b5998" style={{ marginRight: '10px' }} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/austbd" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} color="#0077b5" style={{ marginRight: '10px' }} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
