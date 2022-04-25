import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ borderRadius: "10px" }}
                className="nav-link"
                to="/home"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ borderRadius: "10px" }}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ borderRadius: "10px" }}
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ borderRadius: "10px" }}
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ borderRadius: "10px" }}
                className="nav-link"
                to="/Register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ borderRadius: "10px" }}
                className="nav-link"
                to="/btqlnd"
              >
                React Form
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Life Cycle - Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/lifecycle">
                  Life Cycle
                </NavLink>
                <NavLink className="dropdown-item" to="/usestate">
                  useState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  useEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/apircc">
                  To do app RCC
                </NavLink>
                <NavLink className="dropdown-item" to="/apirfc">
                  To do app RFC
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
