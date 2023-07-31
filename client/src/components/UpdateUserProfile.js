import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useParams } from 'react-router-dom';

function UpdateUserProfile() {

  const { user } = useContext(UserContext);
  const { userId } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  // const [updatedUserProfile, setUpdatedUserProfile] = useState({
  //   name: user.name,
  //   email: user.email,
  //   bio: user.bio
  // })
  const [avatar, setAvatar] = useState(null);

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    setSelectedFile({ avatar: file });
    setAvatar(URL.createObjectURL(file));
  }

  function handleProfileSubmit(e) {
    e.preventDefault();
    setLoading(true);
   // const formData = new FormData();
    
    //console.log('Selected File:', selectedFile); // Debug statement
   // formData.append('avatar', selectedFile.avatar);

   // console.log('Form Data:', formData.get('avatar')); // Debug statement

    // fetch(`/users/${user.id}/avatar`, {
    //   method: "PATCH",
    //   body: formData
    // })
    //   .then(r => r.json())
    //   .then(data => {
    //     setLoading(false)
    //     setAvatar(data.avatar)
    //     setSelectedFile({ avatar: null })
    //   })
    //   .catch(error => setErrors(error))
  }
  // console.log(avatar)
 
  return (
    <div className="profile-container">
        <form onSubmit={handleProfileSubmit} >

            {/**Cover Image Section - Random or preselected */}
            <img className="cover-image" src="https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cover image" />
          

          {/**Avatar Upload Section */}
            <img className="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user avatar" />
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

            {/**Name and Bio Section */}
            <div className="main-profile-form-section">
              <div className="form-group">
                <label htmlFor="name">Full Name: </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Help us get to know you! Tell us a little about yourslef and/or your event(s): </label>
                <input
                  type="text"
                  id="bio"
                  autoComplete="off"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

            <button type="submit">Save Changes</button>
          </div>
        </form>

        
    </div> 
  );
}

export default UpdateUserProfile;