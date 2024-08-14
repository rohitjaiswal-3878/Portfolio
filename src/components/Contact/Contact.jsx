import React, { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.readonly = true;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Thanks for reaching out. We will get back to you soon!!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h3>Contact Me</h3>
          <span>Let's connect! Discuss and grow together</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Enter Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="user_email"
            required
          />
          <textarea
            name="message"
            id="contactMessage"
            placeholder="Enter Message"
            rows={8}
            required
          ></textarea>
          <div className="contact-buttons">
            <button type="reset">Reset Form</button>
            <button type="submit">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
