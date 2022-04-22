import React, { Component,PureComponent } from "react";

//PureComponent giống hệt Component tuy nhiên không có lifecycle shouldComponentUpdate (vì react sẽ tự xử lý nhận biết props thay đổi hay không)

//Lưu ý: sự nhận biết các props của PureComponent chỉ ở mức shallowcompare.(Nhận biết props trước khi thay đổi và sau khi thay đổi có giống nhau không ở kiểu dữ liệu nguyên thủy)
export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("child constructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return currentState;
  }
  //   shouldComponentUpdate(newProps, newState) {
  //     //this.props là props hiện tại của component
  //     //newProps là props mới nhận của component trước khi render
  //     console.log("shouldComponentUpdate child");

  //     if (this.props.number != newProps.number) return true;
  //     return false;
  //   }
  render() {
    console.log("render child");
    return (
      <div>
        <h3>Child component</h3>
        <h3>Number props: {this.props.object.number}</h3>
      </div>
    );
  }
}
