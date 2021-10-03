import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 p-4">
          <Leftside />
        </div>
        <div className="col-4 p-4">
          <Rightside />
        </div>
      </div>
    </div>
  );
};

export default Home;
