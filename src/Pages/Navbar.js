import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <header>
      <div className="nav-container">
        <nav>
          {user && (
            <div className="menu">
              <Link to="/">Home</Link>
              <Link to="/create-projects">Add Project</Link>
              <Link to="/create-skills">Add Skill</Link> <br />
              <Link to="/profile">Skills</Link>
              <Link to="/create-profile">Update Profile</Link>
              <Link to="/projects">Projects</Link>
            </div>
          )}
          <div className="logins">
            {user ? (
              <div>
                <button onClick={handleClick}>Logout</button>
              </div>
            ) : (
              <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
