import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Spicy club</a>
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal items-center px-1 gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink>Blogs</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>
          <button className="btn btn-outline  btn-success">Login</button>
          <button className="btn btn-outline  btn-success">Logout</button>
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
