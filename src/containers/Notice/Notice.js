import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <div className="notice">
      <article className="notice__about">
        <h3 className="white-text no-wrap">New to the Baba Fitness?</h3>
        <h4 className="white-text no-wrap">
          Membership card has duration up to 3 months and first month is totally{" "}
          <span style={{ textTransform: "uppercase" }}>free</span> for new
          members.
        </h4>
        <p className="white-text">Membership card cost: $35</p>
        <button className="white-text">Become a member today</button>
      </article>
      <div className="line" />
      <article className="notice__working-hours">
        <h3 className="white-text no-wrap">Working hours</h3>
        <ol>
          <li>
            <label className="white-text">Monday-Friday:</label>
            <p className="white-text">07:00AM - 10:00PM</p>
          </li>
          <li>
            <label className="white-text">Saturday:</label>
            <p className="white-text">08:00AM - 04:00PM</p>
          </li>
          <li>
            <label className="white-text">Sunday:</label>
            <p className="white-text">Closed</p>
          </li>
        </ol>
      </article>
    </div>
  );
};

export default Notice;
