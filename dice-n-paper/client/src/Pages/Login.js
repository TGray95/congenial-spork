import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import "../styles/Login.css";
import { ADD_USER } from "../utils/mutations";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const [state, setState] = useState(true);
  const [loginFormState, setLoginFormState] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [signUpFormState, setSignUpFormState] = useState({
    email: "",
    password: ""
  })
  //set up mutation for creating new user
  const [addUser] = useMutation(ADD_USER);
  const [login, { error, data }] = useMutation(LOGIN);
//function for handling user sign-up form
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...signUpFormState },
      });
      Auth.login(data.addUser.token)
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
    setSignUpFormState({
      username: '',
      email: '',
      password: '',
    });
  };
//function for handling user log-in form
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...loginFormState },
      });
      Auth.login(data.login.token)
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
    setLoginFormState({
      email: '',
      password: '',
    });
  };

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setSignUpFormState({ ...signUpFormState, [name]: value });
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setLoginFormState({ ...loginFormState, [name]: value });
  };

  return (
    <div className="Login">
      <div className="title">
        <p
          className={`${state ? "black" : "red"}`}
          onClick={() => setState(false)}
        >
          Login
        </p>
        &nbsp;/&nbsp;
        <p
          className={`${state ? "red" : "black"}`}
          onClick={() => setState(true)}
        >
          SignUp
        </p>
      </div>
      {state ? (
        <form className="" onSubmit={handleSignupSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signUpFormState.username}
            onChange={handleSignUpChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signUpFormState.email}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUpFormState.password}
            onChange={handleSignUpChange}
          />
          {/* <input type='password' placeholder='Confirm Password' /> */}
          <div>
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form className="body" onSubmit={handleLoginSubmit}>
          <input type="email" name="email" value={loginFormState.email} onChange={handleLoginChange} placeholder="Email" />
          <input type="password" name="password" value={loginFormState.password} onChange={handleLoginChange} placeholder="Password" />
          <div>
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
