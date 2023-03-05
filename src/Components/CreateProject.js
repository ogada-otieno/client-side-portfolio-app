import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage] = useState("");

  const {user} = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newProject = { title, description, image_url };

    let url = `http://localhost:9292/create-project/${user.user_id}`;

    axios
      .post(url, newProject)
      .then((res) => console.log(res.data))
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
        <textarea
          name="description"
          type="text"
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          name="image_url"
          placeholder="Enter image url"
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Add Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
