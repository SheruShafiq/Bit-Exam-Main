import React from "react";
import "../styles/Succesful.css";
import Title from "../components/Title";
import "../App.css";
import Error from "../components/Error";

function Succesful({ error }) {
  if (error) {
    return <Error />;
  }
  return (
    <>
      <div id="titleApp">
        <Title titleText="Verzonden" subText="Die is binnen" />
      </div>
      <div id="checkMark">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
    </>
  );
}

export default Succesful;
