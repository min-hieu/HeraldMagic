import { fabric } from "fabric";
import React, { useState, useEffect } from "react";
import logo from "./assets/herald-logo.png";
import bg from "./assets/bg-overlay.png";
import fg from "./assets/herald-post-template.png";

function Canvas(props) {
  const base = <canvas id="mainCanvas"></canvas>;
  const baseimg = <img src="public/logo512.png" id="my-image"></img>;

  const [canvas, setCanvas] = useState("");

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const addImage = (canvi, url) => {
    fabric.Image.fromURL(url, (e) => {
      e.set({
        originY: "center",
        originX: "center",
        scaleX: 0.5,
        scaleY: 0.5,
        left: 400,
        top: 350
      });
      canvi.add(e);
      canvi.renderAll();
      // canvi.moveTo(e, 0);
    });
  };

  const addNewText = (canvi) => {
    var addTextBtn = document.querySelector("#btn-addText");
    addTextBtn.onclick = () => {
      addText(canvi, "New Text");
    };
  };

  const setOverlay = (canvi) => {
    canvi.setOverlayImage(bg, canvi.renderAll.bind(canvi), {
      opacity: 0.5,
      angle: 0,
      left: 0,
      top: 0,
      originX: "left",
      originY: "top",
      crossOrigin: "anonymous"
    });
  };

  const pickBg = (canvi) => {
    var bgpicker = document.querySelector("#backgroundpick");
    bgpicker.onchange = (e) => {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function (file) {
        addImage(canvi, file.target.result);
      };
      clipBg(canvi);
      return reader.readAsDataURL(file);
    };
  };

  const clipBg = (img) => {
    const rect = new fabric.Rect({
      originX: "center",
      originY: "center",
      left: 400,
      top: 400,
      height: 454,
      width: 360,
      absolutePositioned: true,
      fill: "yellow"
    });
    img.clipPath = rect;
  };

  const addText = (canvi, text) => {
    var textbox = new fabric.Textbox(text, {
      originY: "center",
      originX: "center",
      left: 400,
      top: 530,
      width: 320,
      fontSize: 28,
      fill: "#fff",
      fontFamily: "Open Sans",
      fontWeight: 800,
      textAlign: "center",
      cornerSize: 12,
      transparentCorners: false
    });
    canvi.add(textbox);
    return textbox;
  };

  const changeTextColor = (canvi) => {
    let colorPicker = document.querySelector("#colorPicker");
    let colorInput = document.querySelector("#colorPickerInput");
    let activeTextArr = [];
    let val = "#ffffff";
    colorPicker.onmousedown = () => {
      activeTextArr = canvi.getActiveObjects();
      console.log(activeTextArr);
    };
    colorPicker.onmousemove = () => {
      val = colorInput.value;
      activeTextArr.forEach((e) => e.set("fill", `#${val}`));
      canvi.renderAll()
    };
    colorInput.onmousedown = () => {
      activeTextArr = canvi.getActiveObjects();
      console.log(activeTextArr);
    };
    colorInput.onchange = () => {
      val = colorInput.value;
      console.log(activeTextArr, val);
      activeTextArr.forEach((e) => e.set("fill", `#${val}`));
      canvi.renderAll()
    };
  };


  const initCanvas = () => {
    const mainCanvas = new fabric.Canvas("mainCanvas", {
      height: 800,
      width: 800,
      backgroundColor: "#add8ff",
      preserveObjectStacking: true,
      controlsAboveOverlay: true
    });
    setOverlay(mainCanvas);
    addImage(mainCanvas, logo);
    addNewText(mainCanvas);
    pickBg(mainCanvas);
    ChangeTextColor(mainCanvas);
    // clipBg(mainCanvas);
    return mainCanvas;
  };

  useEffect(() => {
    let canvi = document.querySelector("#mainCanvas")
    const activeTextArr = canvi.getActiveObjects();
    let val = props.colorState[0];
    // console.log(activeTextArr, val)
    // console.log(activeTextArr, val);
    // activeTextArr.forEach((e) => e.set("fill", val));
  });

  return (
    <div className="App-Canvas">
      <canvas id="mainCanvas" />
      <img className="gui" src={fg}></img>
    </div>
  );
}

export default Canvas;
