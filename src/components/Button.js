import React from "react";
import PropTypes from "prop-types";

const style = { primary: "is-info", secondary: "is-light" };

const Button = ({ type, text, action }) => {
  const buttonStyle = "button " + style[type];
  return (
    <p className="control">
      <button name={text} className={buttonStyle} onClick={action}>
        {text}
      </button>
    </p>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func
};

export default Button;
