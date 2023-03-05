import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateProfile = () => {
  const [name, SetName] = useState("");
  const [speciality, SetSpeciality] = useState("");
  const [experience, SetExperience] = useState("");
  // const [avatarUrl, SetAvatarUrl] = useState("");
  const [interests, SetInterests] = useState("");
  const [hobies, SetHobies] = useState("");
  // const [dob, SetDob] = useState("");
  const [locale, setLocale] = useState("");
  const [address, SetAddress] = useState("");
  const [education, SetEducation] = useState("");
  const [email, SetEmail] = useState("");

  const { user } = useAuthContext();

  const handleChange = (e) => {
    e.preventDefault();

    let updatedProfile = {
      email,
      speciality,
      // avatarUrl,
      experience,
      interests,
      hobies,
      // dob,
      locale,
      address,
      education,
      name
    };

    let url = `http://localhost:9292/user-update/${user.user_id}`;

    axios
      .patch(url, updatedProfile)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.res.data));
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <div>
          <label>Enter name</label>
          <input
            type="text"
            name="name"
            placeholder=""
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div>
        <label>Enter specialty</label>
        <input
          type="text"
          name="speciality"
          placeholder="Specialty"
          onChange={(e) => SetSpeciality(e.target.value)}
        />
        </div>
        <div>
        <label>Enter experience</label>
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          onChange={(e) => SetExperience(e.target.value)}
        />
        </div>
        {/* <div>
        <label>Enter name</label>
        <input
          type="text"
          name="avatarUrl"
          placeholder="Enter your avatar url"
          onChange={(e) => SetAvatarUrl(e.target.value)}
        />
        </div> */}
        <div>
        <label>Enter your interests</label>
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          onChange={(e) => SetInterests(e.target.value)}
        />
        </div>
        <div>
        <label>Enter hobbies</label>
        <input
          type="text"
          name="hobies"
          placeholder="Hobbies"
          onChange={(e) => SetHobies(e.target.value)}
        />
        </div>
        {/* <div>
        <label>Enter date of birth</label>
        <input
          type="date"
          name="dob"
          placeholder="Date of birth"
          onChange={(e) => SetDob(e.target.value)}
        />
        </div> */}
        <div>
        <label>Enter your country</label>
        <input
          type="text"
          name="locale"
          placeholder="City and country"
          onChange={(e) => setLocale(e.target.value)}
        />
        </div>
        <div>
        <label>Enter address</label>
        <input
          type="text"
          name="address"
          placeholder="Home address"
          onChange={(e) => SetAddress(e.target.value)}
        />
        </div>
        <div>
        <label>Your educational background</label>
        <input
          type="text"
          name="education"
          placeholder="Educational background"
          onChange={(e) => SetEducation(e.target.value)}
        />
        </div>
        <div>
        <label>Enter email</label>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          onChange={(e) => SetEmail(e.target.value)}
        />
        </div>
      <button>Update Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
