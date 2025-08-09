import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [, setUserEmail] = useState('');
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
  
      // Fetch profile using the stored email
      const storedProfile = localStorage.getItem(`userProfile_${storedEmail}`);
      if (storedProfile) {
        try {
          setProfile(JSON.parse(storedProfile));
        } catch (error) {
          console.error('Error parsing profile data:', error);
          setProfile({});
        }
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);
  

  const handleEditProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>

      <div className="profile-section">
        <h4>Basic Information</h4>
        <table>
          <tbody>
            {['nameEnglish', 'nameBangla', 'fatherName', 'motherName', 'mobileNumber', 'dob', 'address'].map((field) => (
              <tr key={field}>
                <td><strong>{field.replace(/([A-Z])/g, ' $1')}:</strong></td>
                <td>{profile[field] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="profile-section">
        <h4>Educational Information</h4>
        <p>{profile.educationalInfo || 'N/A'}</p>
      </div>

      <div className="profile-section">
        <h4>Uploaded CV</h4>
        {profile.cvFile ? (
          <p><a href={`/uploads/${profile.cvFile}`} target="_blank" rel="noopener noreferrer">Download CV</a></p>
        ) : (
          <p>No CV uploaded</p>
        )}
      </div>

      <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
