import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import '../styles/ProfilePage.css'
import ProfileEditForm from './ProfileEditForm';
import { FaPinterest, FaInstagram, FaMapMarkerAlt, FaMobileAlt, FaEdit } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import EventPhotoGallery from './EventPhotoGallery';

function UserProfile() {

  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  const coverImage = "https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  function handleClose() {
    setIsEditing(false);
  }
 
  return (
    <div className="profile-page-container">
      {isEditing ? 
        <ProfileEditForm onClose={handleClose} />
      :
        <>
          <img className="cover-image" src={coverImage} alt="cover" />
          
          <img className="avatar" src={user.avatar_url} alt="Avatar" />
          <button className="edit-profile-button" onClick={e => setIsEditing(true)} >{<FaEdit />} Edit Profile</button>
          
          <div className="profile-text-container">
            
            <div className="profile-header">
              <h1 className="user-name">{user.name ? user.name : "+ Add your name"}</h1>
              <p className="pronouns" >{user.pronouns}</p>
              <p className="contact-info" >
                {user.location && <span><FaMapMarkerAlt /> {user.location} | </span>}
                {user.email && <span><MdEmail /> {user.email}</span>}
                {user.phone_number && <span> | <FaMobileAlt /> {user.phone_number}</span>}
                {user.instagram_handle && <span> | <FaInstagram /> {user.instagram_handle}</span>}
                {user.pinterest_profile && <span> | <FaPinterest /> {user.pinterest_profile}</span>}
              </p>
              
            </div>

            <div className="bio-container">
              <p>{user.bio ? user.bio : "+ Tell us about you!"}</p>
            </div>

          </div>

          {user.pinned_photos.length > 0 &&
          <div className="photo-gallery-container">
              <p>Photos from my events:</p>
              <EventPhotoGallery />
          </div>
          }
        </>
        }
    </div> 
  );
}

export default UserProfile;