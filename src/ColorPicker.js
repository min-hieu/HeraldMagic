import { HexColorPicker, HexColorInput } from "react-colorful";

function ColorPicker(props) {
  const [color, setColor] = props.colorState;

  return (
    <div id="AppColorPicker">
      <HexColorPicker id="colorPicker" color={color} onChange={setColor} />
      <HexColorInput id="colorPickerInput" color={color} onChange={setColor} />
      <input type="color" id="htmlColorPicker" />
    </div>
  );
}

export default ColorPicker;
