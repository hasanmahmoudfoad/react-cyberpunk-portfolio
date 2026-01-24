import React from "react";
import styels from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

const isActive = ({ isActive }) => {
  return {
    textShadow: isActive ? '2px 2px 0 var(--light-purple), 0 0 1rem var(--extra-light-blue)' : 'none',
    fontWeight: isActive ? 600 :  400
  };
}

  return (
    <>
      <nav className="navbar glow-box-blue-soft navbar-expand-lg ">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link text-light font-monospace" style={isActive} aria-current="page" to="/">
                About Hasan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light font-monospace" style={isActive} to="Projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light font-monospace" style={isActive} to="Education">
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light font-monospace" style={isActive} to="Work">
                Work Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light font-monospace" style={isActive} to="BeyondWork">
                Beyond Work
              </NavLink>
            </li>
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
