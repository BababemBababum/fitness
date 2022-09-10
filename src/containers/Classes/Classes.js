import React from "react";
import "./Classes.css";
import Class from "./Class";
import { images } from "../../constants/index";

const Classes = () => {
  return (
    <div className="classes">
      <Class imgURL={images.Yoga} name="Yoga" trainer="Mary Yan" />
      <Class
        imgURL={images.MuscleBuilding}
        name="Muscle Building"
        trainer="Cameron Lee"
      />
      <Class imgURL={images.Running} name="Cardio" trainer="Thomas Edison" />
    </div>
  );
};

export default Classes;
