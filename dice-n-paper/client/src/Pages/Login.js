import React from "react"
import { useState } from "react";
import { useMutation } from "@apollo/client";
import "../styles/Login.css";
import { ADD_USER } from "../utils/mutations";
​
function Login() {
  const [state, setState] = useState(true);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  //set up mutation for creating new user
  const [addUser, { error }] = useMutation(ADD_USER);
​
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addUser({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
​
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    setFormState({ ...formState, [name]: value });
  };
​
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
        <form className="" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          />
          {/* <input type='password' placeholder='Confirm Password' /> */}
          <div>
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form className="body">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      )}
    </div>
  );
}
​
export default Login;