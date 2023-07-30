import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useParams } from 'react-router-dom';

function UserProfile() {

  const { user } = useContext(UserContext);
  const { userId } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    setSelectedFile({ avatar: file });
    setAvatar(URL.createObjectURL(file));
  }

  function handleAvatarSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    
    //console.log('Selected File:', selectedFile); // Debug statement
    formData.append('avatar', selectedFile.avatar);

   // console.log('Form Data:', formData.get('avatar')); // Debug statement

    fetch(`/users/${user.id}/avatar`, {
      method: "PATCH",
      body: formData
    })
      .then(r => r.json())
      .then(data => {
        setLoading(false)
        setAvatar(data.avatar)
        setSelectedFile({ avatar: null })
      })
      .catch(error => setErrors(error))
  }
  console.log(avatar)
 
  return (
    <div>
        <form onSubmit={handleAvatarSubmit}>
          <div className="form-group">
            <label htmlFor="avatar">Upload an Avatar </label>
            <input
              type="file"
              name="avatar"
              direct_upload="true"
              accept="image/png, image/jpeg"
              multiple={false}
              onChange={handleAvatarChange}
            />
          </div>
          <button type="submit">submit</button>
        </form>

        
    </div> 
  );
}

export default UserProfile;