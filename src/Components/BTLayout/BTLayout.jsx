import React, { Component } from "react";
import BTContent from "./BTContent";
import BTFooter from "./BTFooter";
import BTHeader from "./BTHeader";
import BTNav from "./BTNav";

export default class BTLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <BTHeader />
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-0 ">
            <BTNav />
          </div>
          <div className="col-8 p-0">
            <BTContent />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BTFooter />
          </div>
        </div>
      </div>
    );
  }
}
