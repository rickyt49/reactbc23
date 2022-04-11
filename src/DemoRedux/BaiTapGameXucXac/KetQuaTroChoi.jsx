import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    console.log(this.props);
    let { banChon, soBanThang, soBanChoi } = this.props;
    return (
      <div className="container text-center">
        <div>
          <p className="display-4">
            BẠN CHỌN:{" "}
            <span className="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
          </p>
        </div>
        <div>
          <p className="display-4">
            TỔNG SỐ LẦN THẮNG:
            <span className="text-success">{soBanThang}</span>
          </p>
        </div>
        <div>
          <p className="display-4">
            TỔNG SỐ LẦN CHƠI:
            <span className="text-primary">{soBanChoi}</span>
          </p>
        </div>
        <div>
          <button className="btn btn-success">
            <div
              className="pt-3 pb-3 display-4 bg-success text-white"
              onClick={() => {
                const action = {
                  type: "PLAY_GAME",
                };
                this.props.dispatch(action);
              }}
            >
              Play Game
            </div>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => ({
  banChon: rootReducer.gameXucXacReducer.banChon,
  soBanChoi: rootReducer.gameXucXacReducer.soBanChoi,
  soBanThang: rootReducer.gameXucXacReducer.soBanThang,
});

export default connect(mapStateToProps)(KetQuaTroChoi);
