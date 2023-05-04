import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="navbar bg-base-100 my-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }
              to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }
              to="/blog">
              Blog
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl ">Spicy club</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default"
            }
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default"
            }
            to="/blog">
            Blog
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img
            title={user?.displayName}
            src={`${user?.photoURL}`}
            className="w-10 h-10 rounded-full"
            alt=""
          />
        ) : (
          <FaUserAlt></FaUserAlt>
        )}
        {user ? (
          <button onClick={handleLogout} className="btn btn-sm btn-ghost">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
