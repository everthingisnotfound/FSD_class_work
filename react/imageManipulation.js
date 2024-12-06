import React, { useState } from "react";
import "./Image.css";
import cat from "./cat.jpg";

function ImageManipulation() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  function enhanceheight() {
    setHeight(height + 20);
  }
  function enhancewidth() {
    setWidth(width + 20);
  }
  function changeColor() {
    
  }
  return (
    <div className="imageCard">
      <div className="catdiv">
        <img src={cat} alt={cat.jpg} width={width} height={height} />
      </div>
      <div className="buttondiv">
        <button onClick={enhanceheight} style={{ backgroundColor: "orange" }}>
          {" "}
          Enhance Height
        </button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={enhancewidth}> Enhance width</button>
        <br />
        <button> Image Rotate</button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={changeColor}> color change</button>
      </div>
    </div>
  );
}

export default ImageManipulation;