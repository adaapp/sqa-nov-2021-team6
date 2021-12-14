import React, { useState } from "react";
import ReactColorSquare from "react-color-square";
import PropTypes from "prop-types";

const ColorInput = ({ color, setColor }) => {

  const [errorMessage, setErrorMessage] = useState("");

  const verifyInput = (userInputValue) => {

    const parsedInputValue = (parseInt(userInputValue, 10));
    if (parsedInputValue < 0 || parsedInputValue > 255 || isNaN(parsedInputValue)) {
      setErrorMessage("Please insert a number between 0 and 255");
      setColor(userInputValue);
    } else {
      setColor(userInputValue);
      setErrorMessage("");
    }
  };

  return (
    <div>
      <form className="field py-4">
        <div className="control">
          <label htmlFor="text" className="label">
            {color}
          </label>
          <div className="level">
            <input
              name={color}
              id="text"
              className="input level-item"
              placeholder="e.g. 123"
              type="text"
              onChange={(e) => verifyInput(e.target.value)}
            />
            <span className="level-item px-2">
              <ReactColorSquare height={35} width={35} color={color} />
            </span>
          </div>
        </div>
      </form>
      <div >
        <p className="has-text-danger">{errorMessage}</p>
      </div>
    </div>
  );
};

ColorInput.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func,
};

export default ColorInput;
