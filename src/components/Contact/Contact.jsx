import React from "react";
import "./index.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h3>Contact Me</h3>
          <span>Let's connect! Discuss and grow together</span>
        </div>
        <form action="">
          <input type="text" placeholder="Enter Name" required />
          <input type="email" placeholder="Enter Email" required />
          <textarea
            name="message"
            id="contactMessage"
            placeholder="Enter Message"
            rows={8}
            required
          ></textarea>
          <div className="contact-buttons">
            <button>Reset Form</button>
            <button>Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
