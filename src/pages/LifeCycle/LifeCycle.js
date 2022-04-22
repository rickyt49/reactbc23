import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      object: {
        number: 1,
      },
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    //Đây là hàm dùng để tiền xử lý các giá trị state và props trước khi rendẻ
    console.log("getDerivedStateFromProps");
    return currentState; //Trả về state mới của component
  }

  shouldComponentUpdate(newProps, newSt) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>LifeCycle</h3>
        <div className="p-5 bg-dark text-white">
          <h3>Parent Component</h3>
          <p>Number: {this.state.object.number}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              let newObject = { ...this.state.object };
              newObject.number += 1;
              this.setState({
                object: newObject,
              });
            }}
          >
            +
          </button>
          <button
            className="btn btn-primary ml-3"
            onClick={() => {
              let newObject = { ...this.state.object };
              newObject.number -= 1;
              this.setState({
                object: newObject,
              });
            }}
          >
            -
          </button>
          <hr />
          <h3>Like: {this.state.like}</h3>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({
                like: this.state.like + 1,
              });
            }}
          >
            Like
          </button>
          <div className="bg-success p-5">
            <Child object={this.state.object} />
          </div>
        </div>
      </div>
    );
  }
  timeout = {};

  componentDidMount() {
    //Đây thường là hàm thực thi thư viện hoặc call API
    // console.log("componentDidMount");
    this.timeout = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 3000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //Hàm gọi trước khi component mất khỏi giao diện
    //LifeCycle dùng để clear các service chạy ngầm của component
    clearInterval(this.timeout);
  }
}
