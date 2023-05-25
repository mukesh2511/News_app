import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand" to="/">
          NewsWala
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link " to="/Business">
                business
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/Entertainment">
                entertainment
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/General">
                general
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/Health">
                health
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/Science">
                science
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/Sports">
                sports
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/Technology">
                technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
