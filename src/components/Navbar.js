import React from "react";
import { auth } from "../firebase";

const navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Ask a doctor</span>
          <div style={{ cursor: "pointer" }} className="navbar-nav">
            <h5 className="nav-item nav-link" onClick={() => auth.signOut()}>
              Logout
            </h5>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
