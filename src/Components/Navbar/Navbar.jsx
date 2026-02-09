import React from "react";
import styels from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const isActive = ({ isActive }) => {
    return {
      textShadow: isActive
        ? "2px 2px 0 var(--light-purple), 0 0 1rem var(--extra-light-blue)"
        : "none",
      fontWeight: isActive ? 600 : 400,
    };
  };

  return (
    <>
      <nav className="navbar glow-box-blue-soft navbar-expand-lg  justify-content-lg-center  justify-content-sm-center">
        <div className="container-fluid justify-content-end">
          <button
            type="button"
            className="navbar-toggler collapsed py-3"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
          >
            <span class="sr-only"></span>

            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav p-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light font-monospace"
                  viewTransition
                  style={isActive}
                  aria-current="page"
                  to="/"
                >
                  About Hasan
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link text-light font-monospace"
                  viewTransition
                  style={isActive}
                  to="Projects"
                >
                  Projects
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light font-monospace"
                  viewTransition
                  style={isActive}
                  to="Education"
                >
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light font-monospace"
                  viewTransition
                  style={isActive}
                  to="Work"
                >
                  Work Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light font-monospace"
                  viewTransition
                  style={isActive}
                  to="ProjectsGrid"
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
