import React from "react";
import "../styles/ButtonStyles.css";

function Button(...props) {
  const buttonText = props[0].buttonText;
  const onClick = props[0].onClick;
  return (
    <div>
      <button id="submitComponent" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
