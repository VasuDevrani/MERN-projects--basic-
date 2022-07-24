import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../actions/AuthActions";

export default function Auth() {
  const dispatch = useDispatch();

  const [isRegister, setisRegister] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    lastname: "",
    firstname: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setUserData({
      username: "",
      lastname: "",
      firstname: "",
      password: "",
      email: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    if (isRegister) {
      dispatch(signUp(userData));
    } else {
      dispatch(logIn(userData));
    }
    reset();
  };

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {isRegister ? (
          <>
            <input
              type="text"
              placeholder="first name"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="last name"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </>
        ) : (
          ""
        )}
        <button type="Submit">Submit</button>
      </form>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => setisRegister(!isRegister)}
      >
        {isRegister ? "Already registered? Login here" : "Create a new account"}
      </a>
    </div>
  );
}
