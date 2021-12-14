import React from "react";
import ReactColorSquare from "react-color-square";
import PropTypes from "prop-types";

const ColorInput = ({ color, setColor, rgbValue }) => {
  return (
    <div>
      <form className="field py-4">
        <div className="control">
          <label style={{color: color}} htmlFor="text" className="label">
            {color}
          </label>
          <div className="level">
            <input
              name="color"
              id="text"
              className="input level-item"
              placeholder="e.g. 123"
              type="text"
              value={rgbValue}
              onChange={(e) => setColor(e.target.value)}
            />
            <span className="level-item px-2">
              <ReactColorSquare height={35} width={35} color={color} />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

ColorInput.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func,
  rgbValue: PropTypes.string
};

export default ColorInput;
