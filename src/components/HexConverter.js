import React, { useState } from "react";
import Button from "./Button";
import ColorInput from "./ColorInput";
import DisplayHex from "./DisplayHex";
import { singleColorConverter } from "./utils.js";

const HexConverter = () => {
  const [greenColorValue, setGreenColor] = useState("");
  const [redColorValue, setRedColor] = useState("");
  const [blueColorValue, setBlueColor] = useState("");
  const [hexColor, setHexColor] = useState("#000000");
  
  const rgbToHex = () => {
    setHexColor("#" + singleColorConverter(greenColorValue) + singleColorConverter(redColorValue) + singleColorConverter(blueColorValue));
  };

  const reset = () => {
    setGreenColor("");
    setRedColor("");
    setBlueColor("");
    setHexColor("#000000");
  };

  return (
    <div className="hex-converter">
      <div className="color-input-container">
        <ColorInput color="red" getColor={setGreenColor}/>
        <ColorInput color="green" getColor={setRedColor}/>
        <ColorInput color="blue" getColor={setBlueColor}/>
      </div>
      <div className="buttons-container">
        <Button text="Convert" action={rgbToHex}/>
        <Button text="Reset" action={reset}/>
      </div>
      <div className="hex-display-container">
        <DisplayHex hexValue={hexColor}/>
      </div>
    </div>
  );
};

export default HexConverter;
