import React, { useEffect } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = React.useState([]);

  const fetchSkills = () => {
    axios
      .get("http://localhost:9292/skills/1")
      .then((res) => {
        const data = res.data;
        setSkills(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const renderSkills = skills.map((skill) => {
    return (
      <div className="skills" key={skill.id}>
        <ul>
          <li>{skill.skill}</li>
        </ul>
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
