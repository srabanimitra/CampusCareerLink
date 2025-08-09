import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [profile, setProfile] = useState({
    nameEnglish: '',
    nameBangla: '',
    fatherName: '',
    motherName: '',
    mobileNumber: '',
    dob: '',
    address: '',
    educationalInfo: '',
    cvFile: null,
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      const storedProfile = localStorage.getItem(`userProfile_${storedEmail}`);

      if (storedProfile && storedProfile !== 'undefined' && storedProfile !== 'null') {
        try {
          setProfile(JSON.parse(storedProfile));
        } catch (error) {
          console.error('Error parsing profile data:', error);
        }
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }
    setProfile({ ...profile, cvFile: file.name });
  };

  const handleSaveProfile = () => {
    if (!userEmail) {
      alert('Please login first!');
      return;
    }
  
    // Save the profile data with the logged-in user's email
    localStorage.setItem(`userProfile_${userEmail}`, JSON.stringify(profile));
    alert('Profile saved successfully!');
    navigate('/profile-page');
  };
  
  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>

      <div className="profile-section">
        <h4>Basic Information</h4>
        <table>
          <tbody>
            {['nameEnglish', 'nameBangla', 'fatherName', 'motherName', 'mobileNumber'].map((field) => (
              <tr key={field}>
                <td><strong>{field.replace(/([A-Z])/g, ' $1')}:</strong></td>
                <td><input type="text" name={field} value={profile[field]} onChange={handleInputChange} /></td>
              </tr>
            ))}
            <tr>
              <td><strong>Date of Birth:</strong></td>
              <td><input type="date" name="dob" value={profile.dob} onChange={handleInputChange} /></td>
            </tr>
            <tr>
              <td><strong>Mailing Address:</strong></td>
              <td><textarea name="address" value={profile.address} onChange={handleInputChange} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="profile-section">
        <h4>Educational Information</h4>
        <textarea name="educationalInfo" value={profile.educationalInfo} onChange={handleInputChange} />
      </div>

      <div className="profile-section">
        <h4>Upload CV</h4>
        <input type="file" onChange={handleCvChange} />
        {profile.cvFile && <p>Uploaded: {profile.cvFile}</p>}
      </div>

      <button className="edit-profile-btn" onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default Profile;
