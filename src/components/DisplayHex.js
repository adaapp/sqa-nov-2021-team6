import React from "react";
import PropTypes from "prop-types";
import ReactColorSquare from "react-color-square";

const DisplayHex = ({ hexValue }) => {
  return (
    <div className="content">
      <div className="control level">
        <input
          className="input level-item"
          type="text"
          value={hexValue}
          readOnly
        />
        <span className="level-item px-2">
          <ReactColorSquare height={35} width={35} color={hexValue} />
        </span>
      </div>
    </div>
  );
};

DisplayHex.propTypes = {
  hexValue: PropTypes.string
};

export default DisplayHex;
