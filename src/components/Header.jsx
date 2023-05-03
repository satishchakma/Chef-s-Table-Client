import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { AuthContext } from "../providers/AuthProviders";
import Login from "../userCredentials/Login";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto bg-[#00800026] rounded-lg my-5 px-5">
      <div className="navbar ">
        <div className="flex-1">
          <Link to="/" className=" normal-case text-xl logo">
            Chef's Table
          </Link>
        </div>
        <div className="flex-none">
          <div className="flex justify-center items-center gap-5">
            <div>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                Home
              </NavLink>
            </div>

            <div>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                Blog
              </NavLink>
            </div>

            {user && (
              <div>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="my-avatar ">
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <div className="tooltip" data-tip={user?.displayName}>
                          <img src={user?.photoURL} />
                        </div>
                      ) : (
                        <div className="tooltip" data-tip={user?.displayName}>
                          <img src={profile} />
                        </div>
                      )}
                    </div>
                  </label>
                  {/* <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            )}
            <div>
              {user ? (
                <button className="login-btn" onClick={handleLogOut}>
                  Logout
                </button>
              ) : (
                <button className="login-btn">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
