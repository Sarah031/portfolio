import React, { useEffect, useState } from "react";
import { scroll_, stickyNav } from "../utility";
import "../../styles/Home.module.css";
export default function Header2({ switcherBtn }) {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(false);
  const Switcher = (style) => {
    document.querySelector("html").setAttribute("data-bs-theme", style);
  };
  return (
    <>
      <div
        className={`header-top-fixed one-page-nav ${
          openMenu ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="container">
          <ul className="main-menu">
            <li className="active">
              <a data-scroll-nav={0} href="#home">
                <span className="m-icon">
                  <i className="bi-house-door" />
                </span>
                <span className="m-text">Home</span>
              </a>
            </li>
            <li>
              <a data-scroll-nav={1} href="#about">
                <span className="m-icon">
                  <i className="bi-person" />
                </span>
                <span className="m-text">About</span>
              </a>
            </li>

            <li>
              <a data-scroll-nav={3} href="#portfolio">
                <span className="m-icon">
                  <i className="bi-columns" />
                </span>
                <span className="m-text">Portfolio</span>
              </a>
            </li>
            <li>
              <a data-scroll-nav={4} href="#contactus">
                <span className="m-icon">
                  <i className="bi-telephone" />
                </span>
                <span className="m-text">Contact</span>
              </a>
            </li>
          </ul>
          {/* Top Menu */}
          <div className="d-flex">
            <div
              className={`theme-btn dropdown ${!switcherBtn ? "d-none" : ""}`}
            >
              <button
                onClick={() => setDropdownShow(!dropdownShow)}
                className={`btn dropdown-toggle ${dropdownShow ? "show" : ""}`}
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <span className="bi my-1 theme-icon-active">
                  <i className="bi-circle-half" />
                </span>
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  dropdownShow ? "show" : ""
                }`}
                aria-labelledby="bd-theme"
                style={{ bsDropdownMinWidth: "8rem" }}
              >
                <li>
                  <button
                    onClick={() => Switcher("light")}
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="light"
                  >
                    <span className="bi me-2 opacity-50 theme-icon">
                      <i className="bi-sun-fill" />
                    </span>
                    Light
                    <span className="bi ms-auto d-none">
                      <i className="bi-check2" />
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => Switcher("dark")}
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="dark"
                  >
                    <span className="bi me-2 opacity-50 theme-icon">
                      <i className="bi-moon-stars-fill" />
                    </span>
                    Dark
                    <span className="bi ms-auto d-none">
                      <i className="bi-check2" />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="ms-2 d-lg-none">
              <button
                className="toggler-menu"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <span />
              </button>
            </div>
          </div>
          {/* / */}
        </div>
      </div>
    </>
  );
}
