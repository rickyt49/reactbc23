import React, { Component } from "react";

export default class Login extends Component {
  handlelogin = () => {
    console.log("login");
    //this.props.history: tại vì được load ra từ thẻ route

    let usName = document.querySelector("#username").value;
    let pass = document.querySelector("#password").value;
    if (usName === "cybersoft" && pass === "cybersoft") {
      //   alert("Đăng nhập thành công!");
      //Chuyển hướng trang
      this.props.history.push("/profile");
      //replace: thay đổi route hiện tại bằng route khác
      //   this.props.history.replace("/home");

      //Đăng nhập thành công sẽ lưu thông tin user
      localStorage.setItem("username", usName);
    } else {
      alert("Tài khoản mật khẩu không đúng");
    }
  };

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <div className="form-group">
          <p>User name</p>
          <input className="form-control" id="username" name="usename"></input>
        </div>
        <div className="form-group">
          <p>Password</p>
          <input className="form-control" id="password" name="password"></input>
        </div>
        <div className="form-group">
          <button
            className="btn btn-success"
            onClick={() => {
              this.handlelogin();
            }}
          >
            Login
          </button>
        </div>
        <button
          className="mt-2 btn btn-success"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Trở về
        </button>
      </div>
    );
  }
}
