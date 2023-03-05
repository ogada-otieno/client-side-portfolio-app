import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateSkills = () => {
  const [skill, setSkill] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);

  const { user } = useAuthContext();

  let navigate = useNavigate();
  let location = useLocation();
  // console.log(location.search);

  let skillId = new URLSearchParams(location.search).get("id");
  // console.log(skillId);

  const handleUpdate = (skillId) => {
    let newEntry = { skill };
    let url = `http://localhost:9292/update-skill/${user.user_id}/${skillId}`;

    axios
      .patch(url, newEntry)
      .then((res) => {
        console.log("Skill updated successfully");
        setIsPending(false);
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  const isSkillId = !(
    skillId === null ||
    skillId === undefined ||
    skillId === ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSkillId) {
      return handleUpdate(skillId);
    }

    let newSkill = { skill };
    setIsPending(true);

    let url = `http://localhost:9292/create-skill/${user.user_id}`;

    axios
      .post(url, newSkill)
      .then((res) => {
        console.log(res.data);
        console.log("Skill created successfully");
        setIsPending(false);
        navigate("/profile");
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
        {!isPending && (
          <button>{isSkillId ? "Update Skill" : "Add Skill"}</button>
        )}
        {isPending && <button disabled>Adding Skill</button>}
      </form>
    </div>
  );
};

export default CreateSkills;
