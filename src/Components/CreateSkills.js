import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateSkills = () => {
  const [skill, setSkill] = React.useState("");

  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newSkill = { skill };

    let url = `http://localhost:9292/create-skill/${user.user_id}`;

    axios
      .post(url, newSkill)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-skills">
      <form onSubmit={handleSubmit}>
        <label>Enter skill</label>
        <input
          type="text"
          name="skill"
          placeholder="Enter skill"
          onChange={(e) => setSkill(e.target.value)}
        />
        <button>Add Skill</button>
      </form>
    </div>
  );
};

export default CreateSkills;
