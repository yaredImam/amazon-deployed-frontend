import React, { useContext, useState } from "react";
import classes from "./Auth.module.css";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
function Auth() {
  const navStateData = useLocation();
  const [{ user }, dispatch] = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });
  const navigate = useNavigate();
  console.log(email, password);
  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signin: false });

          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signin: false });
        });
    } else {
      setLoading({ ...loading, signup: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signup: false });

          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signup: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="sigup amazon logo"
        />
      </Link>

      {/* login form */}

      <div className={classes.login_container}>
        <h1>Sign-in</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            name="signin"
            type="submit"
            className={classes.login_signInButton}
            onClick={authHandler}
          >
            {loading.signin ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* Agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account button  */}
        <button
          name="signup"
          type="submit"
          className={classes.login_registerButton}
          onClick={authHandler}
        >
          {loading.signup ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
              
      </div>
    </section>
  );
}

export default Auth;
