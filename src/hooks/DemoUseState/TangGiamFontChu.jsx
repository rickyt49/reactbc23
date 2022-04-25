import React, { useState } from "react";

export default function TangGiamFontChu() {
  const [fSize, setFontSize] = useState(16);

  return (
    <div>
      <p style={{ fontSize: fSize + "px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        tempora eaque sapiente quos quae. Qui alias quae, facilis assumenda
        aperiam suscipit aspernatur, eius magni aliquid, odit sed maxime
        voluptates error!
      </p>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          setFontSize(fSize + 2);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          setFontSize(fSize - 2);
        }}
      >
        -
      </button>
    </div>
  );
}
