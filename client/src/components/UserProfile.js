import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import '../styles/ProfilePage.css'
import ProfileEditForm from './ProfileEditForm';

function UserProfile() {

  const { user, setUser } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);
 
  return (
    <div className="profile-container">
      {isEditing ? 
        <ProfileEditForm setIsEditing={setIsEditing} />
      :
        <>
          <img className="cover-image" src="https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cover" />
          
          <img className="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user avatar" />
          
          <div className="profile-text-container">
            
            <div className="name-pronouns-header">
              <h1>{user.name ? user.name : "+ Add your name"}</h1>
              <p>{user.pronouns}</p>
            </div>

            <div className="info-container">

              <div className="contact-card">
                <h3>Contact Details:</h3>
                <p>{user.email}</p>
                <p>{user.location}</p>
              </div>

              <div className="bio-container">
                <h2>About me: </h2>
                <p>{user.bio ? user.bio : "+ Tell us about you!"}</p>
              </div>

            </div>

            <button onClick={e => setIsEditing(true)} >Edit My Profile</button>
          </div>
        </>
        }
    </div> 
  );
}

export default UserProfile;