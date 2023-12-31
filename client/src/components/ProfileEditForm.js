import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function ProfileEditForm({ onClose }) {

    const { user, setUser } = useContext(UserContext);

    const [updatedUser, setUpdatedUser] = useState({
        name: user.name ?? "",
        pronouns: user.pronouns ?? "",
        email: user.email,
        bio: user.bio ?? "",
        location: user.location ?? "",
        phone_number: user.phone_number ?? "",
        instagram_handle: user.instagram_handle ?? "",
        pinterest_profile: user.pinterest_profile ?? ""
      });
     
      const [loading, setLoading] = useState(false);
      const [errors, setErrors] = useState([]);
      
      const [avatar, setAvatar] = useState(null);
      const [avatarPreview, setAvatarPreview] = useState(user.avatar_url);
    
      function handleAvatarChange(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setAvatar(selectedFile);
            setAvatarPreview(URL.createObjectURL(selectedFile));
        }
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

        const formData = new FormData();

        // Append values to formData object
        for (const [key, value] of Object.entries(updatedUser)) {
            formData.append(key, value);
        }

        // append avatar to formData obj
        if (avatar) {
            formData.append('avatar', avatar);
        }
    
        fetch('/users/edit', {
            method: "PATCH",
            body: formData,
          })
          .then((r) => {
            setLoading(true);
            if (r.ok) {
                r.json().then((userData) => {
                  setLoading(false);
                  onClose();
                  setUser(userData)
                }
                );
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
      }

    return (
        <div className="edit-profile-form">
            <form onSubmit={handleProfileSubmit} >
            <div className="edit-header-buttons">
                <button className="close-edit-button" type="button" onClick={() => onClose()}>X</button>
            </div>
            
            <img className="edit-cover-image" src="https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cover" />
            
          
          <div className="profile-edit-container">
          
            <div className="edit-profile-header">
            
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        value={updatedUser.name}
                        onChange={handleChange}
                        placeholder="+ Add your name"
                    />
                </div>

                <div className="form-group">
                    <label>Pronouns:</label>
                    <input
                        type="text"
                        name="pronouns"
                        autoComplete="off"
                        value={updatedUser.pronouns}
                        onChange={handleChange}
                        placeholder="+ Add your pronouns"
                    />
                </div>

                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        autoComplete="off"
                        value={updatedUser.location}
                        onChange={handleChange}
                        placeholder="+ Add your location"
                    />
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone_number"
                        autoComplete="off"
                        value={updatedUser.phone_number}
                        onChange={handleChange}
                        placeholder="+ Add your phone number"
                    />
                </div>

                <div className="form-group">
                    <label>Instagram:</label>
                    <input
                        type="text"
                        name="instagram_handle"
                        autoComplete="off"
                        value={updatedUser.instagram_handle}
                        onChange={handleChange}
                        placeholder="+ Add your instagram handle"
                    />
                </div>

                <div className="form-group">
                    <label>Pinterest Profile:</label>
                    <input
                        type="text"
                        name="pinterest_profile"
                        autoComplete="off"
                        value={updatedUser.pinterest_profile}
                        onChange={handleChange}
                        placeholder="+ Add your pinterest profile"
                    />
                </div>   
            </div>

            <div className="bio-avatar-container-edit">
                <div className="form-group">
                    <label>Bio:</label>
                    <textarea
                        type="text"
                        name="bio"
                        value={updatedUser.bio}
                        onChange={handleChange}
                        placeholder="+ Tell us about you!"
                    />
                </div>
                <div className="edit-avatar-container">
                    <label htmlFor="avatar">Avatar:</label>
                    <input
                        type="file"
                        id="avatar"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
                    {avatarPreview && <img className="avatar-preview" src={avatarPreview} alt="Avatar Preview" />}
                </div>
            </div>

          </div>
            
                <div className="errors">
                    {errors.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div>
                <button className="save-profile-button" type="submit" >{loading ? "Loading..." : "Save Changes"}</button>
            </form>
        </div>
    )
}

export default ProfileEditForm;