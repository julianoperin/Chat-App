import React from "react";
import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user.user);

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat App</h2>
      <div id="profile-menu">
        <img src={user.avatar} alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
