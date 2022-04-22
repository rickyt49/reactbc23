const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: "123456",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "090909090",
      email: "nguyenvana@gmail.com",
      loaiNguoiDung: "QuanTri",
    },
    {
      taiKhoan: "nguyenvanb",
      matKhau: "567890",
      hoTen: "Nguyễn Văn B",
      soDienThoai: "0901919191",
      email: "nguyenvanb@gmail.com",
      loaiNguoiDung: "NguoiDung",
    },
  ],
  nguoiDungSua: {
    taiKhoan: "nguyenvana",
    matKhau: "123456",
    hoTen: "Nguyễn Văn A",
    soDienThoai: "090909090",
    email: "nguyenvana@gmail.com",
    loaiNguoiDung: "QuanTri",
  },
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_KY":
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };

    case "XOA_NGUOI_DUNG":
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter((nd) => nd.taiKhoan !== action.taiKhoan),
      ];

      return { ...state };
    case "SUA_NGUOI_DUNG":
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    case "CAP_NHAT_THONG_TIN": {
      //Tìm ra người dùng chỉnh sửa thông tin
      let mangNguoiDung = [...state.mangNguoiDung];
      //Tìm ra người dùng trong mảng thay đổi dựa vào thuộc tín tài khoản
      let nguoiDungUpdate = mangNguoiDung.find(
        (nd) => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      );
      if (nguoiDungUpdate) {
        for (let key in nguoiDungUpdate) {
          nguoiDungUpdate[key] = action.nguoiDungCapNhat[key];
        }
      }
      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    }
    default:
      return state;
  }
};
