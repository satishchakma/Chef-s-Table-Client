import React, { useReducer, useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

import { FcGoogle } from "react-icons/fc";

import { BsGithub } from "react-icons/bs";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn, setUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    form.reset();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length < 6) {
      setError("Please enter at least 6 characters");
    } else if (event.target.value.length >= 6) {
      setError("");
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <p className="text-[#d70e0e]">{error}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    New to Chef's Table?
                    <Link to="/register"> Register here</Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={password.length < 6}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">OR</p>
            <div
              onClick={handleGoogleSignIn}
              className="m-4 btn-primary btn text-center flex justify-center items-center gap-4"
            >
              <div className="p-3">
                <FcGoogle />
              </div>
              <h3>Continue with Google</h3>
            </div>
            <div
              onClick={handleGithubSignIn}
              className="mx-4 mb-4 btn-primary btn text-center flex justify-center items-center gap-4"
            >
              <div className=" p-3">
                <BsGithub></BsGithub>
              </div>
              <h3>Continue with Github</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
