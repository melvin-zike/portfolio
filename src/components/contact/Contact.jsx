import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import phone from "../../img/phone.png";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvofpc6",
        "template_6tzafr6",
        formRef.current,
        "OE4uxvd7ay2HUz8YM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Lets discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-icon">
              <img src={phone} alt="" className="contact-icon" />
              +234 9115010732
            </div>
            <div className="contact-info-icon">
              <img src={phone} alt="" className="contact-icon" />
              melvin.nwaezike@gmail.com
            </div>
            <div className="contact-info-icon">
              <img src={phone} alt="" className="contact-icon" />
              31 Taike street, ikosi lagos.
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>It is a long established fact</b> that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Email" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="message" placeholder="Message" rows="5" />
            <button>Submit</button>
            {done && "Your message will be delivered shortly"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
