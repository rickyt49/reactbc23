import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderKetQua = () => {
    let tongDiem = 0;
    let ketQua = "";
    for (let xucXac of this.props.mangXucXac) {
      tongDiem += xucXac.diem;
    }
    ketQua = tongDiem >= 11 ? "Tài" : "Xỉu";
    return tongDiem + " - " + ketQua;
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <button className="btn btn-primary">
              <div
                className="display-4 p-5 text-white bg-primary"
                onClick={() => {
                  const action = {
                    type: "DAT_CUOC",
                    banChon: true,
                  };
                  this.props.dispatch(action);
                }}
              >
                Tài
              </div>
            </button>
          </div>
          <div className="col-4">
            {this.props.mangXucXac.map((xucXac, index) => {
              return (
                <img
                  key={index}
                  src={xucXac.hinhAnh}
                  alt="..."
                  width={50}
                  height={50}
                />
              );
            })}
            <div className="display-4 text-danger mt-3">
              <p>{this.renderKetQua()}</p>
            </div>
          </div>
          <div className="col-4">
            <button className="btn btn-primary">
              <div
                className="display-4 p-5 text-white bg-primary"
                onClick={() => {
                  const action = {
                    type: "DAT_CUOC",
                    banChon: false,
                  };
                  this.props.dispatch(action);
                }}
              >
                Xỉu
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => ({
  mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
});

export default connect(mapStateToProps)(XucXac);

//Có 2 cách để đưa action lên reducer (chỉ được chọn 1 trong 2)
//+Sử dụng this.props.dispatch (Lưu ý component connect với redux mới có props này)
//+Định nghĩa hàm mapDispatchToProps
