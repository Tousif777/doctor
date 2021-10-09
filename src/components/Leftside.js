import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import db from "../firebase";

const Leftside = () => {
  const [posts, setPosts] = useState("");
  const user = useSelector(selectUser);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("dcposts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      post: posts,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayname: user.displayName,
    });

    setPosts("");
  };
  return (
    <div className="col-10 ">
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          defaultValue={""}
          placeholder="Type your message here"
          onChange={(e) => setPosts(e.target.value)}
          value={posts}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fas fa-paper-plane" onClick={sendPost}>
              Post
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
