import React, { useState } from "react";
import Modal from "react-modal";
import FsLightbox from "fslightbox-react";

export default function PortfolioOne() {
  // For Modal Box
  const [isOpen1, setIsOpen1] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalOne(value) {
    setIsOpen1(!isOpen1);
    setModalContent(value);
  }
  // For Lightbox
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(index) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1, // increment index by 1 to match slide numbering
    });
  }

  const projects = [
    {
      title: "Weather app (Open Weather API)",
      subTitle: "Web app",
      img: "assets/img/Weather-app.jpg",
      desc1:
        "Use the Weather app to check the weather for your current location.",

      type: "Website",
      languages: "HTML, CSS, JS",
      platform: "React Framework",
      github: (
        <a href="https://github.com/Sarah031/weather-app" target="_blank">
          Weather app-github link
        </a>
      ),
      liveURL: (
        <a href="https://sarah031.github.io/weather-app/" target="_blank">
          Weather app
        </a>
      ),
    },
    {
      title: "Chat app",
      subTitle: "Web app",
      img: "assets/img/Chat-app.jpg",
      desc1:
        " React.js chat application using Scaledrone, a tool that makes realtime communication really easy. The app will work similarly to apps like Messenger, WhatsApp or LINE.",

      type: "Website",
      languages: "HTML, CSS, JS",
      platform: "React.js",
      github: (
        <a
          href="https://github.com/Sarah031/Scaledrone-chat-app"
          target="_blank"
        >
          Chat app-github link
        </a>
      ),
      liveURL: (
        <a
          href="https://sarah031.github.io/Scaledrone-chat-app/"
          target="_blank"
        >
          Chat app
        </a>
      ),
    },
    {
      title: "Expense Tracker",
      subTitle: "Web app",
      img: "assets/img/Expense-tracker.jpg",
      desc1:
        "Web application that helps to keep an accurate record of your money inflow and outflow",

      type: "Website",
      languages: "HTML, CSS, JS",
      platform: "React.js",
      github: (
        <a
          href="https://github.com/Sarah031/expense-tracker-app"
          target="_blank"
        >
          Expense tracker app-github link
        </a>
      ),
      liveURL: (
        <a
          href="https://sarah031.github.io/expense-tracker-app/"
          target="_blank"
        >
          Expense tracker app
        </a>
      ),
    },
    {
      title: "Mobile app design",
      subTitle: "Mobile App, App Design",
      img: "assets/img/project-4.jpg",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "Website",
      languages: "PHP, HTML, CSS, JS",
      platform: "Wordpress",
      country: "USA",
      liveURL: "www.mysite.com",
    },
    {
      title: "Website Design for Marketing Agency Startup",
      subTitle: "Mobile App, App Design",
      img: "assets/img/project-5.jpg",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "Website",
      languages: "PHP, HTML, CSS, JS",
      platform: "Wordpress",
      country: "USA",
      liveURL: "www.yoursite.com",
    },
    {
      title: "Mobile app design",
      subTitle: "Mobile App, App Design",
      img: "assets/img/Weather-app.jpg",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "Website",
      languages: "PHP, HTML, CSS, JS",
      platform: "Wordpress",
      country: "USA",
      liveURL: "www.realsite.com",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="section-heading">
          <h3>
            <span>My Portfolio</span>
          </h3>
        </div>
        <div className="lightbox-gallery">
          <div className="row g-3 g-lg-4 portfolio-content">
            {projects.map((data, index) => (
              <div className="col-sm-6 col-lg-4 grid-item" key={index}>
                <div className="portfolio-box">
                  <div className="portfolio-text">
                    <h6>{data.title}</h6>
                    <p>{data.subTitle}</p>
                    <p>{data.liveURL}</p>
                    <a
                      onClick={() => openLightboxOnSlide(index)}
                      className="gallery-link"
                      href="#project_1"
                    >
                      {" "}
                      <i className="bi-arrow-up-right-circle" />
                    </a>
                  </div>
                  <div className="portfolio-img">
                    <img src={data.img} />

                    <a
                      onClick={() => toggleModalOne(data)}
                      className="px_modal portfolio-modal-link"
                      href="#project_1"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <FsLightbox
              toggler={lightboxController.toggler}
              sources={projects.map((data) => data.img)}
              slide={lightboxController.slide}
            />
          </div>
          {modalContent && (
            <Modal
              isOpen={isOpen1}
              onRequestClose={toggleModalOne}
              closeTimeoutMS={300}
              openTimeoutMS={300}
            >
              <div id="full_description" className="px-modal">
                <div className="single-project-box">
                  <div className="row align-items-start">
                    <button
                      onClick={toggleModalOne}
                      title="Close (Esc)"
                      type="button"
                      className="mfp-close"
                    >
                      ×
                    </button>
                    <div className="col-lg-7">
                      <div className="row g-2">
                        <div className="col-6">
                          <img
                            className="border"
                            src={modalContent.img}
                            alt="title"
                          />
                        </div>
                        <div className="col-6">
                          <img
                            className="border"
                            src={modalContent.img}
                            alt="title"
                          />
                        </div>
                        <div className="col-6">
                          <img
                            className="border"
                            src={modalContent.img}
                            alt="title"
                          />
                        </div>
                        <div className="col-6">
                          <img
                            className="border"
                            src={modalContent.img}
                            alt="title"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 pt-4 pt-lg-0">
                      <h4>{modalContent.title}</h4>
                      <p className="mb-3">{modalContent.desc}</p>
                      <div className="about-content">
                        <ul>
                          <li className="d-flex">
                            <span className="col-4 col-lg-3">Type:</span>
                            <span>{modalContent.type}</span>
                          </li>
                          <li className="d-flex">
                            <span className="col-4 col-lg-3">Languages:</span>
                            <span>{modalContent.languages}</span>
                          </li>
                          <li className="d-flex">
                            <span className="col-4 col-lg-3">Platform:</span>
                            <span>{modalContent.platform}</span>
                          </li>
                          <li className="d-flex">
                            <span className="col-4 col-lg-3">Github:</span>
                            <span>{modalContent.github}</span>
                          </li>
                          <li className="d-flex">
                            <span className="col-4 col-lg-3">Live URL:</span>
                            <span>{modalContent.liveURL}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}
