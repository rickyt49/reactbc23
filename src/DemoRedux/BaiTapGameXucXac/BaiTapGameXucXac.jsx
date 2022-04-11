import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";

import style from "../../assets/styles/components/BaiTapGameXucXac.module.css";
import XucXac from "./XucXac";

export class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className={`${style["bg-game"]} m-0 p-0`}>
        <h3 className="text-center display-4 pt-3">Bài tập game xúc xắc</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapGameXucXac);
