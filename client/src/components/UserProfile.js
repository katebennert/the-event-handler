import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import '../styles/ProfilePage.css'
import ProfileEditForm from './ProfileEditForm';
import { FaPinterest, FaInstagram, FaMapMarkerAlt, FaMobileAlt, FaEdit } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function UserProfile() {

  const { user } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);

  function handleClose() {
    setIsEditing(false);
  }
 
  return (
    <div className="profile-page-container">
      {isEditing ? 
        <ProfileEditForm onClose={handleClose} />
      :
        <>
          <img className="cover-image" src="https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cover" />
          
          <img className="avatar" src={user.image} alt={user.name} />
          <button className="edit-profile-button" onClick={e => setIsEditing(true)} >{<FaEdit />} Edit Profile</button>
          
          <div className="profile-text-container">
            
            <div className="profile-header">
              <h1 className="user-name">{user.name ? user.name : "+ Add your name"}</h1>
              <p className="pronouns" >{user.pronouns}</p>
              <p className="contact-info" ><FaMapMarkerAlt />{user.location} | <MdEmail /> {user.email} | <FaMobileAlt /> {user.phone_number} | <FaInstagram /> {user.instagram_handle} | <FaPinterest /> {user.pinterest_profile}</p>
              
            </div>

            <div className="bio-container">
              <p>{user.bio ? user.bio : "+ Tell us about you!"}</p>
            </div>

          </div>
        </>
        }
    </div> 
  );
}

export default UserProfile;