import React, { Component } from "react";

export default class CardProduct extends Component {
  render() {
    //this.props: là thuộc tính có sẵn của component để nhận giá trị từ component cha(là component nào đang sử dụng thẻ này để render)
    //this.props Không thể gán lại giá trị.(Read-only)

    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.img} alt="..." />
        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button className="btn btn-success"> Đặt mua </button>
        </div>
      </div>
    );
  }
}
