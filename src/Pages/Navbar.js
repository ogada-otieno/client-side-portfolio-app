import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="nav-container">
        <nav>
          {user && (
            <div>
            <span>Email: {user.email}</span>
            <span>User ID: {user.user_id}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
