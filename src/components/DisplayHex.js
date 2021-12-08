import React from "react";
import PropTypes from "prop-types";
import ReactColorSquare from "react-color-square";

const DisplayHex = (props) => {

  return (
    <div>
      <label>HEX color</label>
      <p>{props.hexValue}</p>
      {/* <div className="color-square"> */}
      <ReactColorSquare height={25} width={25} color={props.hexValue} />
      {/* </div> */}
    </div>
  );
};

DisplayHex.propTypes = {
  hexValue: PropTypes.string
};

export default DisplayHex;
