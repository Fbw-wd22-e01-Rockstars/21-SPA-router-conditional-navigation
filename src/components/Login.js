import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (
      e.target.userName.value === data.userName &&
      e.target.password.value === data.password
    ) {
      console.log("user Logged in");
      props.setIsLogin(true);
      navigate("/home");
    } else {
      setErrorMessage("username or password is incorrect!");
      console.log("username or password is incorrect");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <p>{errorMessage}</p>
      <form onSubmit={login}>
        <input type="text" name="userName" placeholder="Username" />

        <input type="password" name="password" placeholder="Password" />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
