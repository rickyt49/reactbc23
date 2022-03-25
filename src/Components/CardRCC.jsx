//rcc: Cú pháp tạo nhanh 1 react class component

import React, { Component } from "react";
//Viết hoa tên file component

export default class CardRCC extends Component {
  //Phương thức render sẽ là phương thức định nghĩa giao diện của thẻ này
  render() {
    return (
      <div className="card w-25">
        <img src="https://i.pravatar.cc?u=1" alt="..." />
        <div className="card-body">
          <p>iPhone</p>
          <p>1.000</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    );
  }
}
