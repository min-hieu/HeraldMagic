import { HexColorPicker, HexColorInput } from "react-colorful";
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div id="AppColorPicker">
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} />
    </div>
  );
}

export default ColorPicker;
