import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
  state = {
    fSize: 15, //font size : 15px
  };
  changeFontSize = (newFSize) => {
    this.setState({
      fSize: this.state.fSize + newFSize,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập tăng giảm font size</h3>
        <p style={{ fontSize: ` ${this.state.fSize}px` }}>
          Học lập trình tại Cybersoft
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.changeFontSize(5);
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            this.changeFontSize(-5);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
