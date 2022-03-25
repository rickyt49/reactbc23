import React, { Component } from "react";

export default class extends Component {
  showMess = () => {
    alert("Hello hello");
  };

  sayHello = (name) => {
    alert("Hello " + name);
  };
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.showMess}>
          Click me!
        </button>
        <hr />
        <button
          className="btn btn-success"
          //   onClick={this.sayHello.bind(this, "Tùng")}
          onClick={() => {
            this.sayHello("Khải");
            //Có thể gọi nhiều hàm hơn nữa
          }}
        >
          Say hello
        </button>
      </div>
    );
  }
}
