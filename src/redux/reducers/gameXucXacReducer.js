const stateDefault = {
  banChon: true, //true: tài, false: xỉu
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
  ],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.banChon = action.banChon;
      return { ...state };
    case "PLAY_GAME":
      //Random 3 con xúc xắc
      let mangXucXacNgauNhien = [];
      for (let i = 1; i <= 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xxNgauNhien = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        mangXucXacNgauNhien.push(xxNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      let tongDiem = 0;
      for (let xucXac of mangXucXacNgauNhien) {
        tongDiem += xucXac.diem;
      }

      if (
        (state.banChon && tongDiem >= 11) ||
        (!state.banChon && tongDiem < 11)
      ) {
        state.soBanThang += 1;
      }

      state.soBanChoi += 1;

      return { ...state };
    default:
      return state;
  }
};
