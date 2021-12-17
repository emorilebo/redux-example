import React from "react";
import { setUser, logout } from "./userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const loginToApp = () => {
    dispatch(setUser({ user: "Godfrey" }));
  };
  return (
    <div>
      <h2>I am the login component of the redux</h2>
      <button onClick={loginToApp}>Log in here</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
}

export default Login;
