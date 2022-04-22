import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    value: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      loaiNguoiDung: "NguoiDung",
    },
    error: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChangeEvent = (event) => {
    let { className, id, name, value } = event.target;
    //data-type <input data-type/> => dù nằm trên thẻ input nhưng không phải là property =>không thể dùng event.target [data-type]
    let dataType = event.target.getAttribute("datatype");

    //Biến event dùng để truy xuất ngược đến thẻ xảy ra sự kiện
    //event.target => dom ngược lại thẻ đang diễn ra sự kiện
    //mỗi lần change thì lấy dữ liệu trường input này gắn vào state

    //lấy lại state của value
    let newValue = { ...this.state.value };
    //Xử lý
    newValue[id] = value;

    //Lấy lại state của error
    let newError = { ...this.state.error };
    //Xử lý
    let messError = "";
    if (value === "") {
      messError = id + " không được bỏ trống!";
    } else if (dataType === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        messError = "Email chưa đúng định dạng";
      }
    } else if (dataType === "phone") {
      let regexPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
      if (!regexPhone.test(value)) {
        messError = "Số điện thoại chưa đúng định dạng";
      }
    }

    newError[id] = messError;
    //set lại state cho value và error
    this.setState({
      value: newValue,
      error: newError,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //Hàm chặn sự kiện reload của browser
    //Kiểm tra dữ liệu nhập trước khi submit
    let { value, error } = this.state;
    // kiểm tra form lỗi state.error
    for (let key in error) {
      if (error[key] !== "") {
        alert(key + " chưa hợp lệ");
        return;
      }
    }
    //kiểm tra form nhập đầy đủ chưa state.value
    for (let key in value) {
      if (value[key] === "") {
        alert(key + " chưa hợp lệ");
        return;
      }
    }
    //Hợp lệ thì gửi dữ liệu lên redux
    const action = {
      type: "DANG_KY",
      nguoiDung: this.state.value,
    };
    this.props.dispatch(action);
  };

  //Hướng giải quyết: Thay vì dữ liệu follow từ props => Chuyển dữ liệu sang state.value

  // static getDerivedStateFromProps(newProps, currentState) {
  //   //Lấy props từ redux về gán cho state trước khi render
  //   if (currentState.value.taiKhoan !== newProps.nguoiDungSua.taiKhoan) {
  //     currentState.value = { ...newProps.nguoiDungSua };
  //   }
  //   return currentState;
  // }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.nguoiDungSua,
    });
  }

  render() {
    let { taiKhoan, matKhau, email, soDienThoai, loaiNguoiDung, hoTen } =
      this.state.value;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3 className="">Thông tin người dùng</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={this.handleChangeEvent}
                    value={taiKhoan}
                  ></input>
                  <p className="text text-danger">
                    {this.state.error.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    onChange={this.handleChangeEvent}
                    value={hoTen}
                  ></input>
                  <p className="text text-danger">{this.state.error.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    datatype="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={this.handleChangeEvent}
                    value={email}
                  ></input>
                  <p className="text text-danger">{this.state.error.email}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    type={"password"}
                    onChange={this.handleChangeEvent}
                    value={matKhau}
                  ></input>
                  <p className="text text-danger">{this.state.error.matKhau}</p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    datatype="phone"
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    onChange={this.handleChangeEvent}
                    value={soDienThoai}
                  ></input>
                  <p className="text text-danger">
                    {this.state.error.soDienThoai}
                  </p>
                </div>
                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select
                    className="form-control"
                    id="loaiNguoiDung"
                    name="loaiNguoiDung"
                    onChange={this.handleChangeEvent}
                    value={loaiNguoiDung}
                  >
                    <option value={"NguoiDung"}>NguoiDung</option>
                    <option value={"QuanTri"}>QuanTri</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success">
              Đăng ký
            </button>
            <button
              type="button"
              className="btn btn-primary ml-2"
              onClick={() => {
                const action = {
                  type: "CAP_NHAT_THONG_TIN",
                  nguoiDungCapNhat: this.state.value,
                };
                this.props.dispatch(action);
               
              }}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungSua: state.quanLyNguoiDungReducer.nguoiDungSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
