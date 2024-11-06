import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [profileImage, setProfileImage] = useState(assets.profile_image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='navbar'>
      <div>
        <img className='logo' src={assets.logo} alt="logo" />
        <p className='Admin-panel'>Admin Panel</p>
      </div>
      <div className='profile-container'>
        <img className='profile' src={profileImage} alt="profile_image" />
        <input type="file" accept="image/*" onChange={handleImageChange} className='profile-input' />
      </div>
    </div>
  );
}

export default Navbar;
