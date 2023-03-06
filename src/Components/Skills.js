import React, { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

function Skills() {
  const [skills, setSkills] = React.useState([]);
  const { user } = useAuthContext();

  const userDetails = JSON.parse(localStorage.getItem("user"));
  // console.log(userDetails);
  let id = userDetails.user_id;
  // console.log(id);

  let url = `http://localhost:9292/skills/${id}`;

  const fetchSkills = () => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setSkills(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleUpdate = (skillId) => {
    window.location.href = `/create-skills/?id=${skillId}`;
  };

  const handleDelete = (skillId) => {
    axios
      .delete(`http://localhost:9292/delete-skill/${id}/${skillId}`)
      .then((res) => {
        fetchSkills();
      })
      .catch((err) => console.log(err));
  };

  const renderSkills = skills.map((skill) => {
    return (
      <div className="skills" key={skill.id}>
        <div>
          <p>{skill.skill}</p>
        </div>
        <div>
          <button onClick={() => handleUpdate(skill.id)}>Update</button>
          <span
            className="material-symbols-outlined"
            onClick={() => handleDelete(skill.id)}
          >
            delete
          </span>
          {/* <button onClick={() => handleDelete(skill.id)}>Delete</button> */}
        </div>
      </div>
    );
  });

  return (
    <>
      <h4>SKILLS</h4>
      {renderSkills.length > 0 ? (
        <>{renderSkills}</>
      ) : (
        <p>You don't have any skills...Add your first skill?</p>
      )}
    </>
  );
}

export default Skills;
