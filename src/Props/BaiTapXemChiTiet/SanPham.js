import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { phone } = this.props;
    
    return (
      <div className="card">
        <div className="d-flex justify-content-center">
          <img src={phone.hinhAnh} alt="" className="w-50" />
        </div>
        <div className="card-body">
          <h5>{phone.tenSP}</h5>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.renderDetail(phone);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
