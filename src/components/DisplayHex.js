import React from "react";
import PropTypes from "prop-types";
import ReactColorSquare from "react-color-square";

const DisplayHex = ({ hexValue }) => {

  return (
    <div>
      <label>HEX color</label>
      <p>{hexValue}</p>
      <ReactColorSquare height={25} width={25} color={hexValue} />
    </div>
  );
};

DisplayHex.propTypes = {
  hexValue: PropTypes.string
};

export default DisplayHex;
