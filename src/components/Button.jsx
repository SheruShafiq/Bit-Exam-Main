import React from "react";
import "../styles/ButtonStyles.css";

function Button(...props) {
  const buttonText = props[0].buttonText;
  return (
    <div>
      <button id="submitComponent">{buttonText}</button>
    </div>
  );
}

export default Button;
