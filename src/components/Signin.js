import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase";
const Signin = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Logo</h1>
      <button className="btn btn-primary" onClick={signIn}>
        <FcGoogle /> Signin with google
      </button>
    </div>
  );
};

export default Signin;
