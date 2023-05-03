import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img className="w-full" src={error}></img>
      <h1>
        You didn’t break the internet, but we can’t find what you are looking
        for.
      </h1>
      <Link to="/" className="btn btn-primary my-4">
        Go back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
