import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link to="/" className=" normal-case text-xl logo">
            Chef's Table
          </Link>
          <p>
            Chef's Table Ltd.
            <br />
            Providing delicious food since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Learn More</span>
          <a className="link link-hover">Health Benefits</a>
          <a className="link link-hover">How to Cook Miracle Noodies</a>
          <a className="link link-hover">Miracle Noodie Team Recipes</a>
          <a className="link link-hover">Customer Recipes</a>
        </div>
        <div>
          <span className="footer-title">Ordering Info</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
