import React, { useState } from "react";
import TangGiamFontChu from "./TangGiamFontChu";

export default function DemoUseState() {
  const [number, setNumber] = useState(1);
  const [imgSrc, setImgSrc] = useState("https://i.pravatar.cc?u=1");

  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
      <hr />

      <h3>Facebook Dating</h3>
      <div className="card w-25">
        <img src={imgSrc} alt="..." className="w-100" />
        <div className="card-body">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              let rand = Math.floor(Math.random() * 1000 + 1);
              setImgSrc(`https://i.pravatar.cc?u=${rand}`);
            }}
          >
            Random
          </button>
        </div>
      </div>
      <br />
      <hr />
      <h3>Bài tập tăng giảm font size</h3>
      <TangGiamFontChu />
    </div>
  );
}
