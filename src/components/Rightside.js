import React, { useState } from "react";

const Rightside = () => {
  const [action, setaction] = useState(false);
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for doctor"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          boxShadow: "0px 0px 5px #ccc",
        }}
        className="card p-4"
      >
        <div className="card">
          <div className="card-header">
            <h3>Search Results</h3>
          </div>
        </div>
      </div>
      <div className="btn btn-primary" onClick={() => setaction(!action)}>
        chat
      </div>
    </div>
  );
};

export default Rightside;
