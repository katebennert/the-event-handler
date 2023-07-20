import React, { useContext } from "react";
import { UserContext } from "../context/user";

function UserProfile() {

  const { user } = useContext(UserContext);
 
  return (
    <div>
        User Profile Page for: {user.email}
    </div>
  );
}

export default UserProfile;