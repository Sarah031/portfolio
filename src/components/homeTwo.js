import React from "react";
import { TypeWriter } from "./../plugin/type-writer";

export default function HomeTwo() {
  return (
    <>
      <div>
        <div className="ef-1" />
        <div className="ef-2" />
        <div className="container position-relative">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 ps-xl-5 mb-5 mb-lg-0">
              <div className="home-intro">
                <h6>👋 Hi, I’ m</h6>
                <h1>Sara Majstorovic</h1>
                <h2>
                  I{"'"}m a <TypeWriter />
                </h2>
                <p className="pe-lg-5">
                  Designer and Developer with a passion for creating
                  user-friendly websites. I like to implement new creative ideas
                  and discover more efficient ways in coding.
                </p>
                <ul className="nav social-link">
                  <li>
                    <a href="https://dribbble.com/sara_m01" target="_blank">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/settings/profile"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sara-majstorovic-47b54018a/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <div className="home-image">
                    <img id="slide" src="assets/img/Me.jpg" alt="title" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="home-image home-image-02">
                    <img id="slide2" src="assets/img/me2.jpg" alt="title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
