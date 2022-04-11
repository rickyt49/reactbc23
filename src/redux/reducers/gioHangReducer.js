const stateDefault = [
  //   {
  //     maSP: 1,
  //     tenSP: "iPhone",
  //     hinhAnh: "./img/products/black-car.jpg",
  //     giaBan: 1000,
  //     soLuong: 1,
  //   },
];

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;
      let sp = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
      }
      //immutable: tính bất biến
      //đối với state là object hoặc array phải clone ra object array mới
      return [...gioHang];
    }
    case "XOA_GIO_HANG": {
      let gioHang = [...state];
      gioHang = gioHang.filter((sp) => sp.maSP !== action.maSPClick);
      return gioHang;
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHang = [...state];
      let sp = gioHang.find((sp) => sp.maSP === action.maSPClick);
      if (sp) {
        sp.soLuong += action.soLuong;
        if (sp.soLuong < 1) {
          alert("Số lượng không được nhỏ hơn 1");
          sp.soLuong -= action.soLuong;
          return gioHang;
        }
      }
      return gioHang;
    }
    default:
      return state;
  }
};
