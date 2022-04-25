import React, { useEffect, useState } from "react";

const arrDiaDiem = [
  {
    id: "HCM",
    name: "TP.Hồ Chí Minh",
    arrQuanHuyen: [
      { id: "01", name: "Quận 1" },
      { id: "02", name: "Quận 2" },
      { id: "03", name: "Quận 3" },
    ],
  },
  {
    id: "HN",
    name: "Hà Nội",
    arrQuanHuyen: [
      { id: "04", name: "Hai Bà Trưng" },
      { id: "05", name: "Hoàn Kiếm" },
      { id: "06", name: "Ba Đình" },
    ],
  },
];

let timeOut = {};
export default function DemoUseEffect() {
  const [number, setNumber] = useState(1);
  //   useEffect(() => {
  //     //Hàm chạy sau khi giao diện render và sau khi state update
  //     console.log("componentDidMount");
  //     console.log("componentDidUpdate");
  //   });
  const [idTP, setIdIP] = useState("");
  const [arrQH, setArrQH] = useState([]);
  const renderQuanHuyen = () => {
    if (arrQH.length == 0) {
      return <option>Hãy chọn thành phố</option>;
    } else {
      return arrQH.map((qh, index) => {
        return (
          <option value={qh.id} key={index}>
            {qh.name}
          </option>
        );
      });
    }
  };

  useEffect(() => {
    //Khi tham số 2 thay đổi thì gọi hàm này(tương tụ componentDidUpdate)
    if (idTP !== "") {
      //Dựa vào state idTP => để tìm ra được object thành phố
      let thongTinTP = arrDiaDiem.find((tp) => tp.id === idTP);
      //lấy ra thuộc tính arrQuanHuyen
      let newArrQH = thongTinTP.arrQuanHuyen;
      //setArrQH = thuộc tính vừa tìm đc
      setArrQH(newArrQH);
    }
  }, [idTP]);

  useEffect(() => {
    timeOut = setInterval(() => {
      console.log("call api");
    }, 3000);
    return () => {
      //Hàm này sẽ thực thi trước khi component mất khỏi giao diện. thường dùng để clear các service chạy ngầm(Giống component will unmount)
      clearInterval(timeOut);
    };
  }, []);
  //   useEffect(() => {
  //     //Chạy lần đầu tiên sau khi giao diện render
  //     console.log("componentDidMount");
  //     //Thường dùng để call API hoặc chèn thư viện
  //   }, []);

  return (
    <div className="container">
      DemoUseEffect
      <h3>Number:{number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        ADD
      </button>
      <hr />
      <div className="form-group">
        <p>Chọn Thành Phố</p>
        <select
          className="form-control w-25"
          value={idTP}
          onChange={(event) => {
            let { value } = event.target;
            
            setIdIP(value);
          }}
        >
          <option value={""}>Chọn thành phố</option>
          <option value={"HCM"}>Hồ Chí Minh</option>
          <option value={"HN"}>Hà Nội</option>
        </select>
      </div>
      <div className="form-group">
        <p>Chọn Quận Huyện</p>
        <select className="form-control w-25">{renderQuanHuyen()}</select>
      </div>
    </div>
  );
}
