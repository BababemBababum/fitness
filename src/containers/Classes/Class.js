import React from "react";
import "./Class.css";

const Class = (props) => {
  return (
    <div className="card" id="classes">
      <img src={props.imgURL} alt="img" />
      <div>
        <h3>{props.name}</h3>
        <p className="class-trainer">
          Trained by:{" "}
          <span style={{ fontWeight: "bold" }}>{props.trainer}</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vel!
        </p>
      </div>
    </div>
  );
};

export default Class;
