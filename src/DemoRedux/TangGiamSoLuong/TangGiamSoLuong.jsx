import React, { Component } from "react";
//Kết nối redux
import { connect } from "react-redux";

class tangGiamSoLuong extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <p>{this.props.number} </p>
        <button onClick={() => this.props.tangGiamSoLuong(1)}>+</button>
        <button onClick={() => this.props.tangGiamSoLuong(-1)}>-</button>
      </div>
    );
  }
}
//Lấy dữ liệu từ redux về
//Tạo ra các props cho component là giá trị
const mapStateToProps = (rootReducer) => {
  //State tổng
  return {
    number: rootReducer.stateNumber,
  };
};

//Hàm định nghĩa gửi dữ liệu props lên store
//Tạo ra các props cho component là giá trị
const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (soLuong) => {
      // console.log(soLuong);
      //Để gửi dữ liệu lên redux(action)
      const action = {
        type: "TANG_GIAM_SO_LUONG", //redux bắt buộc có
        soLuong: soLuong,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(tangGiamSoLuong);
