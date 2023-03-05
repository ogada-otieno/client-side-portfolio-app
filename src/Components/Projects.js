import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// holds all the projects under a user.

function Projects() {
  const [projects, setprojects] = useState([]);

  // grab user's id from local storage.
  const user = JSON.parse(localStorage.getItem("user"));
  let id = user.user_id;

  

  const fetchProjects = () => {
    axios
      .get(`http://localhost:9292/projects/${id}`)
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

  function handleUpdate(projectId) {
    window.location.href = `/create-projects/?id=${projectId}`;
  }

  function handleDelete(projectId) {
    axios
      .delete(`http://localhost:9292/delete-project/${id}/${projectId}`)
      .then((res) => {
        fetchProjects();
      })
      .catch((err) => console.log(err));
  }

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
        <div className="update-delete">
          <button onClick={() => handleUpdate(project.id)}>Update</button>
          <button onClick={() => handleDelete(project.id)}>Delete</button>
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
        <p>
          You do not have any projects...Add your
          <Link to="/create-projects">first project?</Link>
        </p>
      )}
    </>
  );
}

export default Projects;
