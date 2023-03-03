import React, { useEffect, useState } from "react";
import axios from "axios";

// holds all the projects under a user.

function Projects() {
  const [projects, setprojects] = useState([]);

  const fetchProjects = () => {
    axios
      .get("http://localhost:9292/projects/1")
      .then((res) => {
        const fetchedProjects = res.data;
        // console.log(fetchedProjects);
        setprojects(fetchedProjects);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const renderprojects = projects.map((project) => {
    return (
      <div className="list-projects" key={project.id}>
        <div className="single-project">
          <h4 className="title">{project.title}</h4>
          <p>{project.description}</p>
          <img src={project.image_url} alt="Project image" />
          <p>Created: {project.created_at}</p>
          <p>Updated: {project.updated_at}</p>
        </div>
      </div>
    );
  });

  return (
    <>
    PROJECTS
        {renderprojects.length > 0 ? (
          <>{renderprojects}</>
        ) : (
          <p>You do not have any projects...Add your first project?</p>
        )}
    </>
  );
}

export default Projects;
