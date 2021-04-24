import { HexColorPicker } from "react-colorful";
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#aabbcc");
  return <HexColorPicker color={color} onChange={setColor} />;
}

export default ColorPicker;
