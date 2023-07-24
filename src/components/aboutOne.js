import React from "react";
import { useEffect } from "react";
import { activeSkillProgress } from "../utility";
export default function AboutOne() {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  return (
    <>
      <div className="container">
        <div className="about-me">
          <div className="row align-items-start">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <div className="title-01">
                <span>About Me</span>
              </div>
              <div className="about-me-text pb-5">
                <h3>My Name is Sara</h3>

                <p>
                  I am versatile web designer due to my experience in graphic
                  and web design. I am dedicate to continuously learn about new
                  web design trends and concepts has made me a valuable member
                  of the team. With freelance experience and a master`&#39`s in
                  web design, my expertise can help customers modernize with
                  websites and appeal to expanding customer populations.{" "}
                </p>
                <div className="row pt-2">
                  <div className="col-auto">
                    <div className="a-count"></div>
                  </div>
                  <div className="col-auto">
                    <div className="a-count"></div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="title-01 mt-5">
                <span>Experience</span>
              </div>
              <div className="resume-box">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-briefcase" />
                    </div>
                    <span className="time">2019 - Present</span>
                    <h5>Freelance-Wordpress-Elementor</h5>
                    <p>
                      Developing Webpages using Elementor, designing UI,
                      research, implement digital marketing solutions (Google
                      Analytics, Newsletter...)
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-briefcase" />
                    </div>
                    <span className="time">2020-Present</span>
                    <h5>Digital Activator-Admin assistant</h5>
                    <p>
                      Linkedin administrator, Monthly plans for Linkedin posts,
                      posts design, operating and maintaining custodial
                      functions for the office
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 sticky-lg-top ps-xl-5">
              <div className="row align-items-start">
                <div className="col-md-7 py-4">
                  <div className="about-me-img">
                    <img src="assets/img/me2.jpg" alt="title" />
                  </div>
                </div>
                <div className="col-md-5 py-4">
                  <div className="about-content">
                    <ul>
                      <li>
                        <div className="a-icon">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="a-text">
                          <a
                            className="text-reset stretched-link"
                            href="mailto:sara.majstorovic01@gmail.com"
                            target="_blank"
                          >
                            Mail Me
                          </a>
                        </div>
                      </li>

                      <li>
                        <div className="a-icon">
                          <i className="fa-solid fa-file-pdf" />
                        </div>
                        <div className="a-text">
                          <a
                            className="text-reset stretched-link"
                            href="https://drive.google.com/file/d/1lqbVGD3bUDwzOyATThBG2Ui4EoqfptN0/view?usp=sharing"
                            target="_blank"
                          >
                            Resume
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 py-4">
                  <div className="title-01">
                    <span>Skills</span>
                  </div>
                  <div className="skills">
                    <div className="skill-lt" data-value={100}>
                      <h6 className="dark-color">HTML5</h6>
                      <div className="skill-bar">
                        <div className="skill-bar-in">
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                    <div className="skill-lt" data-value={100}>
                      <h6 className="dark-color">CSS</h6>
                      <div className="skill-bar">
                        <div className="skill-bar-in">
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                    <div className="skill-lt" data-value={90}>
                      <h6 className="dark-color">JS</h6>
                      <div className="skill-bar">
                        <div className="skill-bar-in">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                    <div className="skill-lt" data-value={75}>
                      <h6 className="dark-color">WordPress</h6>
                      <div className="skill-bar">
                        <div className="skill-bar-in">
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="skill-lt" data-value={88}>
                      <h6 className="dark-color">UI/UX</h6>
                      <div className="skill-bar">
                        <div className="skill-bar-in">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>
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
