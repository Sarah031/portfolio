import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [isSent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_62sshko",
        "template_tqp7fxq",
        form.current,
        "tR5Waa4ma7A5ULcyF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("form").reset();
    setSent(true);
  };

  return (
    <form ref={form} id="form" onSubmit={sendEmail} className="contact-form">
      <div className="form-group  ">
        <label className="form-label col-md-6">Name</label>
        <input type="text" name="from_name" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input className="form-control" type="email" name="from_email" />
      </div>
      <div className="col-md-12" style={{ padding: "0 0 10px" }}>
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" />
      </div>
      <div className="col-md-2">
        <div className="send">
          <input
            className="px-btn w-100"
            type="submit"
            id="send_message"
            value="Send"
          />
        </div>
      </div>
      {!isSent ? (
        ""
      ) : (
        <p>Your message has been received, I will contact you soon.</p>
      )}
    </form>
  );
}
