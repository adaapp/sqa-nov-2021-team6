import React, { useState } from "react";
import Button from "./Button";
import ColorInput from "./ColorInput";
import DisplayHex from "./DisplayHex";
import { singleColorConverter } from "../helpers/utils.js";

const HexConverter = () => {
  const [redColorValue, setRedColorValue] = useState("");
  const [greenColorValue, setGreenColorValue] = useState("");
  const [blueColorValue, setBlueColorValue] = useState("");
  const [hexColor, setHexColor] = useState("#000000");

  const rgbToHex = () => {
    setHexColor(
      "#" +
        singleColorConverter(redColorValue) +
        singleColorConverter(greenColorValue) +
        singleColorConverter(blueColorValue)
    );
  };

  const reset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setRedColorValue("");
    setGreenColorValue("");
    setBlueColorValue("");
    setHexColor("#000000");
  };

  return (
    <div className="columns">
      <div className="column card p-5 is-third">
        <h2 className="title">RBG Colour</h2>
        <div className="level-item is-justify-content-flex-start">
          <ColorInput
            color="Red"
            setColor={setRedColorValue}
            rgbValue={redColorValue}
          />
        </div>
        <div className="level-item is-justify-content-flex-start">
          <ColorInput
            color="Green"
            setColor={setGreenColorValue}
            rgbValue={greenColorValue}
          />
        </div>
        <div className="level-item is-justify-content-flex-start">
          <ColorInput
            color="Blue"
            setColor={setBlueColorValue}
            rgbValue={blueColorValue}
          />
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered vertical-center mx-6">
        <div className="px-4">
          <Button type="primary" text="Convert" action={rgbToHex} />
        </div>
        <div className="px-4">
          <Button type="secondary" text="Reset" action={reset} />
        </div>
      </div>
      <div className="column card p-5 is-third">
        <h2 className="title">HEX Colour</h2>
        <div className="level-item is-justify-content-flex-start">
          <DisplayHex hexValue={hexColor} />
        </div>
      </div>
    </div>
  );
};

export default HexConverter;
