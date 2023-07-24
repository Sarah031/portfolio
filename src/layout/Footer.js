import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="footer-info">
            <div className="footer-avatar">
              <img src="assets/img/SM.png" alt="title" />
            </div>
            <h6>Sara Majstorovic</h6>
          </div>
          <ul className="nav social-link">
            <li>
              <a href="https://github.com/settings/profile" target="_blank">
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
          <p className="copyright">© 2023 copyright all right reserved</p>
        </div>
      </div>
      {/* End Footer */}
    </>
  );
}
