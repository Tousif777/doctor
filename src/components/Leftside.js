import React from "react";

const Leftside = () => {
  return (
    <div className="col-10 ">
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          defaultValue={""}
          placeholder="Type your message here"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fas fa-paper-plane">Post</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
