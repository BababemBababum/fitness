import React from "react";
import "./About.css";
import { images } from "../../constants/index";

const About = () => {
  return (
    <div className="about" id="about us">
      <article className="about__article">
        <h3>Hello, we are Baba Fitness</h3>
        <p className="about__article-p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
          impedit obcaecati consequatur repudiandae odit maiores doloribus?
          Explicabo tempore repellendus, dolorum ab cum eligendi placeat,
          molestias unde vel, harum tenetur!
        </p>
        <p className="about__article-p2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          temporibus et dignissimos hic? Cupiditate dolorum molestias nulla eos,
          facilis ab!
        </p>
      </article>

      <ul className="about__instructors">
        <li className="about__instructors-card">
          <img src={images.FemaleTrainer} alt="instructor1" />
          <div>
            <h2>Mary Yan</h2>
            <p>Yoga Instructor</p>
          </div>
        </li>
        <li className="about__instructors-card">
          <img src={images.MaleTrainer1} alt="instructor2" />
          <div>
            <h2>Cameron Lee</h2>
            <p>Personal Trainer</p>
          </div>
        </li>
        <li className="about__instructors-card">
          <img src={images.MaleTrainer2} alt="instructor3" />
          <div>
            <h2>Thomas Edison</h2>
            <p>Cardio Trainer</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
