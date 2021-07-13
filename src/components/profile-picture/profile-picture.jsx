import React from "react";
import "./profile-picture.css";
import pic from "../../images/profile.jpeg";

export const ProfilePicture = () => (
  <div>
    <img className="profilePicture" alt="profile" src={pic} />
  </div>
);
