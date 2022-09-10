import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [name]: value,
      };
    });
  }
  return (
    <div id="contact">
      <div className="form-holder">
        <label>Feel free to ask anything</label>
        <form>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button>Send message</button>
        </form>
      </div>
      <div>
        <h2>Where you can find us</h2>
        <p>120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</p>
        <p className="copyright">Copyright. All rights reserved to NoNeeD</p>
      </div>
    </div>
  );
};

export default Footer;
