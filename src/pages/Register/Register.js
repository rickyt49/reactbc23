import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    status: true,
  };

  handleSubmit = () => {
    this.setState({ status: false });
  };

  render() {
    return (
      <div className="container">
        <h3>Đăng ký</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input className="form-group" id="taiKhoan" />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input className="form-group" id="matKhau" />
        </div>
        <div className="form-group">
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Đăng ký
          </button>
        </div>
        <Prompt
          when={this.state.status}
          message={(location) => "Bạn có muốn rời khỏi trang không?"}
        />
      </div>
    );
  }
}
