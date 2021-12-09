import React from "react";
import ReactColorSquare from "react-color-square";
import PropTypes from "prop-types";

const ColorInput = ({ color, setColor }) => {
  
  return (
    <div>
      <form className="form-input">
        <label htmlFor="text" className="color-input-label">{color}</label>
        <input 
          name="color " 
          id="text"
          className="color-input-field" 
          type="text"
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <div className="color-square">
          <ReactColorSquare height={25} width={25} color={color} />
        </div>
      </form>
    </div>
  );
};

ColorInput.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
};

export default ColorInput;
