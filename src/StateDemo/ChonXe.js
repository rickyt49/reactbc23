import React, { Component } from "react";

export default class ChonXe extends Component {
  state = {
    imgLink: "./img/products/black-car.jpg",
  };

  doiXe = (newImgLink) => {
    this.setState({
      imgLink: `./img/products/${newImgLink}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={this.state.imgLink} alt="..." className="w-100" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ background: "black" }}
                  onClick={() => this.doiXe("black")}
                >
                  Crystal Black
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-blacks"
                  style={{ background: "#EEE" }}
                  onClick={() => this.doiXe("steel")}
                >
                  Modern Steel
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ background: "silver" }}
                  onClick={() => this.doiXe("silver")}
                >
                  Lunar Silver
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ background: "red" }}
                  onClick={() => this.doiXe("red")}
                >
                  Rallye Red
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
