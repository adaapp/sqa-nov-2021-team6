import React, { useState } from "react";
import Button from "./Button";
import ColorInput from "./ColorInput";
import DisplayHex from "./DisplayHex";
import { singleColorConverter } from "./utils.js";

const HexConverter = () => {
  const [redColorValue, setRedColorValue] = useState("");
  const [greenColorValue, setGreenColorValue] = useState("");
  const [blueColorValue, setBlueColorValue] = useState("");
  const [hexColor, setHexColor] = useState("#000000");
  
  const rgbToHex = () => {
    setHexColor("#" + singleColorConverter(redColorValue) + singleColorConverter(greenColorValue) + singleColorConverter(blueColorValue));
  };

  const reset = () => {
    setRedColorValue("");
    setGreenColorValue("");
    setBlueColorValue("");
    setHexColor("#000000");
  };

  return (
    <div className="hex-converter">
      <div className="color-input-container">
        <ColorInput color="red" setColor={setRedColorValue} rgbValue={redColorValue}/>
        <ColorInput color="green" setColor={setGreenColorValue} rgbValue={greenColorValue}/>
        <ColorInput color="blue" setColor={setBlueColorValue} rgbValue={blueColorValue}/>
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
