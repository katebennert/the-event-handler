import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function UserProfile() {

  const { user, setUser } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);

  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    pronouns: user.pronouns,
    email: user.email,
    bio: user.bio,
    location: user.location
  });
 
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const [avatar, setAvatar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    setSelectedFile({ avatar: file });
    setAvatar(URL.createObjectURL(file));
  }

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    setUpdatedUser({
        ...updatedUser,
        [name]: value
    });
}

  function handleProfileSubmit(e) {
    e.preventDefault();
   // const formData = new FormData();
    
    //console.log('Selected File:', selectedFile); // Debug statement
   // formData.append('avatar', selectedFile.avatar);

   // console.log('Form Data:', formData.get('avatar')); // Debug statement

    fetch('/users/edit', {
        method: "PATCH",
        headers: {
         "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
      .then((r) => {
        setLoading(true);
        if (r.ok) {
            r.json().then((userData) => {
              setLoading(false);
              setIsEditing(false);
              setUser(userData)
            }
            );
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
  }
 
  return (
    <div className="profile-container">
      {isEditing ? 

        <form onSubmit={handleProfileSubmit} >

            {/**Cover Image Section - Random or preselected */}
            <img className="cover-image" src="https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cover image" />
          

          {/**Avatar Upload Section */}
            <img className="avatar-edit" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user avatar" />
            <div className="avatar-form-group">
              <label htmlFor="avatar" >➕ </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                direct_upload="true"
                accept="image/png, image/jpeg"
                multiple={false}
                onChange={handleAvatarChange}
              />
            </div>

            <div className="profile-text-container">
            
              <div className="name-pronouns-header">
                <div>
                <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={updatedUser.name ? updatedUser.name : "+ Add your name"}
                    onChange={handleChange}
                  />
                </div>
                <div>
                <input
                    type="text"
                    name="pronouns"
                    autoComplete="off"
                    value={updatedUser.pronouns ? updatedUser.pronouns: "+ Add your pronouns"}
                    onChange={handleChange}
                  />
                  </div>
              </div>

              <div className="info-container">

                <div className="contact-card">
                  <h3>Contact Details:</h3>
                  <p>{updatedUser.email}</p>
                  <div>
                <input
                    type="text"
                    name="location"
                    autoComplete="off"
                    value={updatedUser.location ? updatedUser.location : "+ Add your location"}
                    onChange={handleChange}
                  />
                  </div>
                </div>

                <div className="bio-container">
                  <h2>About me: </h2>
                  <textarea
                    type="text"
                    name="bio"
                    value={updatedUser.bio ? updatedUser.bio : ""}
                    onChange={handleChange}
                  />
                </div>
                
              </div>

            </div>


          <button type="submit">Save Changes</button>
          
        </form>

        :
        <>
        
        {/**Cover Image Section - Random or preselected */}
          <img className="cover-image" src="https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cover image" />
          

        {/**Avatar Upload Section */}
          <img className="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user avatar" />
          
          <div className="profile-text-container">
            
            <div className="name-pronouns-header">
              <h1>{updatedUser.name ? updatedUser.name : "+ Add your name"}</h1>
              <p>{updatedUser.pronouns}</p>
            </div>

            <div className="info-container">

              <div className="contact-card">
                <h3>Contact Details:</h3>
                <p>{updatedUser.email}</p>
                <p>{updatedUser.location}</p>
              </div>

              <div className="bio-container">
                <h2>About me: </h2>
                <p>{updatedUser.bio ? updatedUser.bio : "+ Tell us about you!"}</p>
              </div>

            </div>


            <button onClick={e => setIsEditing(true)} >Edit My Profile</button>
          </div>
        </>
        }
        {errors}
    </div> 
  );
}

export default UserProfile;