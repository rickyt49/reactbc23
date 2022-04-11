import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTiet extends Component {
  state = {
    phoneDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [],
  };
  //state đặt ở đâu thì setState sẽ đặt tại đó
  themGioHang = (sanPhamClick) => {
    //setState=> Thay đổi giỏ hàng
    let sp = { ...sanPhamClick, soLuong: 1 };
    let gioHang = this.state.gioHang;
    let timGioHang = gioHang.find((sp) => sp.maSP === sanPhamClick.maSP);
    if (timGioHang) {
      timGioHang.soLuong += 1;
    } else {
      gioHang.push(sp);
    }
    this.setState({
      gioHang: gioHang,
    });
    return gioHang;
  };
  xoaGioHang = (maSanPhamClick) => {
    let gioHang = this.state.gioHang;
    let timIdxSp = gioHang.findIndex((sp) => sp.maSP === maSanPhamClick);
    if (timIdxSp !== -1) {
      if (window.confirm("Bạn có muốn xóa sản phẩm đang chọn?")) {
        //Hỏi người dùng trước khi thực hiện
        gioHang.splice(timIdxSp, 1);
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };
  tangGiamSoLuong = (maSanPhamClick, soLuong) => {
    //1 => nút + , -1 => nút -
    console.log(maSanPhamClick, soLuong);
    let { gioHang } = this.state;
    let spGH = gioHang.find((sp) => sp.maSP === maSanPhamClick);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này khÔng")) {
          gioHang = gioHang.filter((sp) => sp.maSP !== maSanPhamClick);
        }
        //Nếu người dùng cancel => -- số lượng đó
        spGH.soLuong -= soLuong;
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };
  arrPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  renderPhone = () => {
    return this.arrPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            phone={phone}
            renderDetail={this.renderDetail}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };

  renderDetail = (clickedPhone) => {
    this.setState({
      phoneDetail: clickedPhone,
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      giaBan,
      heDieuHanh,
      hinhAnh,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
    } = this.state.phoneDetail;
    return (
      <div className="container-fluid">
        <h3 className="mt-3 text-center">Giỏ hàng</h3>
        <GioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <h3 className="mt-3 text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.renderPhone()}</div>
        <div className="row">
          <div className="col-4 text-center">
            <h1>{tenSP}</h1>
            <img src={hinhAnh} alt="..." className="w-75" />
          </div>
          <div className="col-8">
            <h1>Thông số kỹ thuật</h1>
            <table className="table">
              <tbody>
                <tr>
                  <th>Màn hình:</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành:</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước:</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau:</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM:</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM:</th>
                  <th>{rom}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
