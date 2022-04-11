import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  tinhTongSoLuong = () => {
    // let tongSL = 0;
    // for (let spGH of this.props.stategioHang) {
    //   tongSL += spGH.soLuong;
    // }
    // return tongSL;
    let tongSoLuong = this.props.stateGioHang.reduce((soLuong, spGH) => {
      return soLuong + spGH.soLuong;
    }, 0);

    let tongTien = this.props.stateGioHang.reduce((tt, spGH) => {
      let tong = spGH.giaBan * spGH.soLuong;
      return tt + tong;
    }, 0);
    return tongSoLuong + " - " + tongTien.toLocaleString();
  };

  render() {
    return (
      <div>
        <div className="text-right">
          <span className="text-danger font-weight-bold">
            {/* Giỏ hàng ({this.props.stateGioHang.length}) */}
            Giỏ hàng: ({this.tinhTongSoLuong()})
          </span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stateGioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img src={spGH.hinhAnh} alt="..." width={50} height={50} />
                  </td>
                  <td>{spGH.giaBan.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                      }}
                    >
                      +
                    </button>
                    {spGH.soLuong}
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()} </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                      }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//Định nghĩa hàm mapStateToProps để lấy dữ liệu redux về
const mapStateToProps = (rootReducer) => {
  return {
    stateGioHang: rootReducer.gioHangReducer,
  };
};

//Định nghĩa hàm chứa sự kiện xóa giỏ hàng
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSPClick, soLuong) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSPClick,
        soLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
