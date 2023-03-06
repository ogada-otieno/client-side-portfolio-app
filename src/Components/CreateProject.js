import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const { user } = useAuthContext();

  const userDetails = JSON.parse(localStorage.getItem("user"));
  let id = userDetails.user_id;

  let navigate = useNavigate();
  let location = useLocation();
  // console.log(location.search)

  let project_id = new URLSearchParams(location.search).get("id");
  // console.log(project_id);

  const handleUpdate = (project_id) => {
    let newEntry = { title, description, image_url };
    let url = `http://localhost:9292/update-project/${id}/${project_id}`;

    axios
      .patch(url, newEntry)
      .then((res) => {
        // console.log(res.data);
        console.log("Project updated successfully");
        setIsPending(false);
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };

  const isProjectId = !(
    project_id === null ||
    project_id === undefined ||
    project_id === ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isProjectId) {
      return handleUpdate(project_id);
    }

    let newProject = { title, description, image_url };
    setIsPending(true);

    let url = `http://localhost:9292/create-project/${id}`;

    axios
      .post(url, newProject)
      .then((res) => {
        console.log(res.data);
        console.log("New project created successfully");
        setIsPending(false);
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create-project">
      <h4>Create a new project</h4>
      <form onSubmit={handleSubmit}>
        <label>Project Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter project title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label >Description</label>
        <textarea
          name="description"
          type="text"
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label >Image link</label>
        <input
          type="text"
          name="image_url"
          placeholder="Enter image link"
          onChange={(e) => setImage(e.target.value)}
        />
        {!isPending && (
          <button>{isProjectId ? "Update Project" : "Add Project"}</button>
        )}
        {isPending && <button disabled>Adding Project</button>}
      </form>
    </div>
  );
};

export default CreateProject;
