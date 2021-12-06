import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, action }) => {
  return <button className="button" onClick={action}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func
};

export default Button;
