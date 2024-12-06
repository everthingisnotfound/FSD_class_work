import React, { useState } from 'react'
import './image.css';
import cat from './cat3.jpg';
function ImageManipulation() {
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const [imgrotate, setImgRotate] = useState(0);

  function enhanceheight() {
    setHeight(height + 20);
  }
  function enhanceWidth() {
    setWidth(width + 20);
  }

  function changeColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }


  function imageRotate() {
    setImgRotate(imgrotate+30);
  }


  return (
    <div className='imageCard'>

      <div className='catdiv' style={{ backgroundColor: `RGB(${red},${green},${blue})` }}>
        <img src={cat} height={height} width={width}  style={{transform:`rotate(${imgrotate}deg)`}} alt='cat Image' />
      </div>
      <div className='buttondiv'>

        <button onClick={enhanceheight} style={{ backgroundColor: 'orange' }} >Enhance Height</button>
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <button onClick={enhanceWidth} style={{ backgroundColor: 'green' }}>Enhance Width</button>
        <br></br>
        &nbsp;
        <button onClick={imageRotate} >Image Rotate</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={changeColor} >Color Change</button>
      </div>


    </div>
  )
}

export default ImageManipulation