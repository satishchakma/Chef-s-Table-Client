import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="container mx-auto bg-[#00800026] rounded-lg my-5 px-5">
      <div className="navbar ">
        <div className="flex-1">
          <a className=" normal-case text-xl logo">Chef's Table</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profile} />
                  </div>
                </label>
                <ul
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
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
