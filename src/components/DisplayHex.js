import React from "react";
import PropTypes from "prop-types";

const DisplayHex = (props) => {

  return (
    // <form className="display-hex-form">
    //   <input className="display-hex-input"></input>
    // </form>
    <div>
      <label>HEX color</label>
      <p>#{props.hexValue}</p>
    </div>
  );
};

DisplayHex.propTypes = {
  hexValue: PropTypes.string
};

export default DisplayHex;
