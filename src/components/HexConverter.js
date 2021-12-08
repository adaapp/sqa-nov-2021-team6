import React from "react";
import Button from "./Button";
import ColorInput from "./ColorInput";
import DisplayHex from "./DisplayHex";

const HexConverter = () => {
  return (
    <div className="hex-converter">
      <div className="color-input-container">
        <ColorInput color="red" />
        <ColorInput color="green" />
        <ColorInput color="blue" />
      </div>
      <div className="buttons-container">
        <Button text="Convert" />
        <Button text="Reset" />
      </div>
      <div className="hex-display-container">
        <DisplayHex />
      </div>
    </div>
  );
};

export default HexConverter;
