import React from "react";
import ReactColorSquare from "react-color-square";
import PropTypes from "prop-types";

const ColorInput = ({ color }) => {
  return (
    <div>
      <form className="form-input">
        <label className="color-input-label">{color}</label>
        <input name="color " className="color-input-field" type="text"></input>
        <div className="color-square">
          <ReactColorSquare height={25} width={25} color={color} />
        </div>
      </form>
    </div>
  );
};

ColorInput.propTypes = {
  color: PropTypes.string
};

export default ColorInput;
