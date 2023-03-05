import React, { useEffect, useState } from "react";
import axios from "axios";
import Skills from "./Skills";
import { useAuthContext } from "../hooks/useAuthContext";

// displays user profile and skills.

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);

  const { user } = useAuthContext();

  const userDetails = JSON.parse(localStorage.getItem("user"));
  // console.log(userDetails);
  let id = userDetails.user_id;
  // console.log(id);

  const fetchProfile = () => {
    axios
      .get(`http://localhost:9292/user/${id}`)
      .then((res) => {
        const fetchedProfile = res.data;
        // console.log(fetchedProfile);
        setUserProfile(fetchedProfile);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // let arrayUser = Array.from(userProfile) // convert object to array
  // console.log(arrayUser);

  const renderProfile = Array.from(userProfile).map((user) => {
    return (
      <div className="profile" key={user.id}>
        <h4>{user.name}</h4>
        <h4>{user.speciality}</h4>
        <img src={user.avatar_url} alt="profile image" />
        <h4>{user.email}</h4>
        <h4>{user.experience}</h4>
        <h4>{user.interests}</h4>
        <h4>{user.name}</h4>
        <h4>{user.hobies}</h4>
        <h4>{user.date_of_birth}</h4>
        <h4>{user.locale}</h4>
        <h4>{user.address}</h4>
        <h4>{user.education}</h4>
      </div>
    );
  });

  return (
    <>
      <>
        <h4>PROFILE</h4>
        {renderProfile.length > 0 ? (
          <>{renderProfile}</>
        ) : (
          <p>You haven't created a profile. Update here?</p>
        )}
      </>
      <>
        <Skills />
      </>
    </>
  );
};

export default Profile;
