import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    msg: "",
  });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, subject, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && name && subject && msg) {
      setSuccess(true);
      setTimeout(() => {
        setForm({ email: "", name: "", subject: "", msg: "" });
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <>
      <div className="contact-form">
        <div className="contact-head">
          <p>
            For more questions, feel free to contact me via the contact form!
          </p>
        </div>
        <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
          <div
            className="returnmessage"
            data-success="Your message has been received, we will contact you soon."
            style={{ display: success ? "block" : "none" }}
          >
            <span className="contact_success">
              Message sent. You can expect answer in 24hr.
            </span>
          </div>
          <div
            className="empty_notice"
            style={{ display: error ? "block" : "none" }}
          >
            <span>Please fill required fields!</span>
          </div>
          <div className="row gx-3 gy-4">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  onFocus={() => setActive("name")}
                  onBlur={() => setActive(null)}
                  onChange={(e) => onChange(e)}
                  value={name}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name *"
                  className={`form-control ${
                    active === "name" || name ? "active" : ""
                  }`}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  onFocus={() => setActive("email")}
                  onBlur={() => setActive(null)}
                  onChange={(e) => onChange(e)}
                  value={email}
                  name="email"
                  id="email"
                  type="text"
                  placeholder="E-mail *"
                  className={`form-control ${
                    active === "email" || email ? "active" : ""
                  }`}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  onFocus={() => setActive("subject")}
                  onBlur={() => setActive(null)}
                  onChange={(e) => onChange(e)}
                  value={subject}
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Subject *"
                  className={`form-control ${
                    active === "subject" || subject ? "active" : ""
                  }`}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  onFocus={() => setActive("message")}
                  onBlur={() => setActive(null)}
                  name="msg"
                  onChange={(e) => onChange(e)}
                  value={msg}
                  id="message"
                  placeholder="Message"
                  className={`form-control ${
                    active === "message" || msg ? "active" : ""
                  }`}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="send">
                <button
                  className="px-btn w-100"
                  type="submit"
                  id="send_message"
                  value=""
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
