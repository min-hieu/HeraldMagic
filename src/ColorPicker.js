import { HexColorPicker, HexColorInput } from "react-colorful";
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div id="AppColorPicker">
      <HexColorPicker id="colorPicker" color={color} onChange={setColor} />
      <HexColorInput id="colorPickerInput" color={color} onChange={setColor} />
      <input type="color" id="htmlColorPicker" />
    </div>
  );
}

export default ColorPicker;
