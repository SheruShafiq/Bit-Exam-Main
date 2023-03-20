import React from "react";
import "../styles/TitleStyles.css";

function Title(...props) {
  const titleText = props[0].titleText;
  const subText = props[0].subText;
  return (
    <>
      <div className="title">
        <p id="titleSubText">{subText}</p>
        <h1 style={{ wordWrap: "break-word" }}>{titleText}</h1>
      </div>
    </>
  );
}

export default Title;
