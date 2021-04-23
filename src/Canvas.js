import { fabric } from "fabric";
import React, { useState, useEffect } from 'react';

function Canvas() {
    const base = (  <canvas id="mainCanvas"></canvas>);
    const [canvas, setCanvas] = useState('');
    useEffect(() => {
        setCanvas(initCanvas());}, [])
    
    const initCanvas = () => (
        new fabric.Canvas('mainCanvas', {
            height: 360,
            width: 360,
            backgroundColor: 'pink',
            preserveObjectStacking: true
        })
     );

    return(
    <div className = "App-Canvas">
      <canvas id="mainCanvas" />
    </div>
  );
}

export default Canvas;