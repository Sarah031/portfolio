import React from "react";
import ContactForm from "./../plugin/contact-form";

export default function ContactOne() {
  return (
    <>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5 d-flex">
            <div className="d-flex flex-column w-100">
              <div className="contact-info">
                <h3>Contact me</h3>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="bi-chat-left-dots-fill" />
                    </div>
                    <div className="text">
                      <label>Send a message</label>
                      <p>
                        <span>
                          <a
                            className="text-reset"
                            href="mailto:sara.majstorovic01@]mail.com"
                          >
                            sara@gmail.com
                          </a>
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ps-xl-5">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
