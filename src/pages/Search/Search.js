import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <h3>Search</h3>
        <NavLink to={"/search?abc=123"}>Link search</NavLink>
        <h3>Search: {this.props.location.search.split("=")[1]}</h3>
        <div>
          <input className="form-control w-25" id="txtTuKhoa" />
          <button
            className="btn btn-success"
            onClick={() => {
              let tuKhoa = document.querySelector("#txtTuKhoa").value;
              this.props.history.push(`/search?k=${tuKhoa}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
